import { createClient, Entry, EntryCollection, Asset } from "contentful";
import { parseHeaderHeadline } from "./stringUtils";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Content type IDs - defining these as constants allows for remote control
export const CONTENT_TYPES = {
  PAGE: "page",
  PRODUCT: "products",
  STAT: "stat",
  INSIGHT: "insight",
  // Add more content types as needed
};

// Field IDs - defining these as constants allows for remote control
export const FIELD_IDS = {
  // Page fields
  PAGE_IDENTIFIER: "page",
  HEADLINE: "headline",
  SUBHEADLINE: "subheadline",
  BACKGROUND_IMAGE: "backgroundImage",
  CONTENT: "content",
  
  // Product fields
  PRODUCT_NAME: "name",
  PRODUCT_ID: "id",
  PRODUCT_IMAGE: "productImage",
  PRODUCT_DESCRIPTION: "description",
  PRODUCT_PRICE: "price",
  
  // Stat fields
  STAT_NUMBER: "number",
  STAT_LABEL: "label",
  
  // Insight fields
  INSIGHT_TITLE: "title",
  INSIGHT_DESCRIPTION: "description",
  INSIGHT_IMAGE: "image",
  INSIGHT_SLUG: "slug",
  
  // Add more field IDs as needed
};

// Define proper types for Contentful content
export interface ContentfulHero {
  headline: Array<string>;
  subHeadline: string;
  bgImg: string;
  richTextContent?: string; // HTML string from rich text
  content?: string; // Additional content HTML
}

export interface ContentfulProduct {
  key: string;
  title: string;
  image: string;
  thumbnail?: string; 
  id: string;
  sys?: { id: string };
  description?: string; // Optional rich text description
  link?: string;
}

export interface ContentfulStat {
  id: string;
  number: string;
  label: string;
}

export interface ContentfulInsight {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  link?: string;
}

// Type for Contentful rich text fields
interface RichTextField {
  nodeType: string;
  content: any[];
  data: Record<string, any>;
}

// Create Contentful client
const getContentfulClient = () => {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
  
  if (!spaceId || !accessToken) {
    throw new Error("Contentful environment variables are not set");
  }
  
  return createClient({
    space: spaceId,
    accessToken: accessToken,
  });
};

// Helper function to parse rich text fields
export const parseRichText = (richText: RichTextDocument | undefined): string => {
  if (!richText) return "";
  
  try {
    // Convert rich text to HTML string
    return documentToHtmlString(richText);
  } catch (error) {
    console.error("Error parsing rich text:", error);
    return "";
  }
};

// Helper to safely get field value with proper typing
const getField = <T>(entry: Entry<any>, fieldId: string, defaultValue: T): T => {
  return (entry.fields[fieldId] as T) || defaultValue;
};

// Helper to get asset URL
const getAssetUrl = (asset: Asset | undefined): string => {
  if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) {
    return "";
  }
  const url = asset.fields.file.url;
  return url.startsWith("//") ? `https:${url}` : url;
};

// Fetch page content with improved handling
export const fetchPageContent = async (
  pageName: string,
  locale: string
): Promise<ContentfulHero> => {
  try {
    const client = getContentfulClient();
    
    // Use query parameters to filter results server-side
    const localeKey = locale === "sv" ? `${pageName}_sv` : pageName;
    const response = await client.getEntries({
      content_type: CONTENT_TYPES.PAGE,
      "fields.page": localeKey,
      locale: locale === "sv" ? "sv-SE" : "en-US",
    });
    
    // Check if we have results
    if (response.items.length === 0) {
      throw new Error(`Content for ${pageName} (${locale}) not found`);
    }
    
    const pageEntry = response.items[0];
    
    // Get the headline - allow for new format with primary/secondary emphasis
    const headlineRaw = getField<string>(pageEntry, FIELD_IDS.HEADLINE, "");
    let headline: string[] = [];
    
    if (headlineRaw.includes("|")) {
      // Split on pipe for primary/secondary text
      headline = headlineRaw.split("|").map(part => part.trim());
    } else {
      // Legacy format - use the parseHeaderHeadline for backwards compatibility
      const parsed = parseHeaderHeadline(headlineRaw);
      headline = parsed.map(item => item.token);
    }
    
    // Get the subheadline - handle both string and rich text formats
    let subHeadline = "";
    const subheadlineField = pageEntry.fields[FIELD_IDS.SUBHEADLINE];
    
    if (typeof subheadlineField === "string") {
      subHeadline = subheadlineField;
    } else if (subheadlineField && typeof subheadlineField === "object") {
      // Handle rich text
      subHeadline = parseRichText(subheadlineField as RichTextDocument);
    }
    
    // Get main content if available
    let content = "";
    const contentField = pageEntry.fields[FIELD_IDS.CONTENT];
    if (contentField && typeof contentField === "object") {
      content = parseRichText(contentField as RichTextDocument);
    }
    
    // Get background image - use the direct field or default to naming pattern
    const backgroundAsset = getField<Asset>(pageEntry, FIELD_IDS.BACKGROUND_IMAGE, undefined);
    const bgImg = backgroundAsset 
      ? getAssetUrl(backgroundAsset) 
      : `/${pageName}.png`; // Default image pattern with proper path
    
    const result: ContentfulHero = {
      headline,
      subHeadline: subHeadline.replace(/<[^>]*>/g, ""), // Strip HTML tags for plain text
      richTextContent: subHeadline, // Keep the HTML for rich text rendering
      content, // Additional content HTML
      bgImg,
    };
    
    return result;
  } catch (error) {
    console.error(`Error fetching ${pageName} content:`, error);
    // Return default values instead of throwing
    return {
      headline: ["Global", "Recycling", "Solutions"],
      subHeadline: "From Europe to Asia, connecting markets with exceptional service and expertise",
      bgImg: `/home.png`,
    };
  }
};

// Fetch products with improved handling
export const fetchProducts = async (locale = "en-US"): Promise<ContentfulProduct[]> => {
  try {
    const client = getContentfulClient();
    
    // Use query parameters to filter results server-side
    const response = await client.getEntries({
      content_type: CONTENT_TYPES.PRODUCT,
      locale,
      order: "fields.id",
    });
    
    // Map to proper structure with types
    const products = response.items.map((item) => {
      const productImage = getField<Asset>(item, FIELD_IDS.PRODUCT_IMAGE, undefined);
      const imageUrl = getAssetUrl(productImage);
      
      // Handle rich text description if present
      const descriptionField = item.fields[FIELD_IDS.PRODUCT_DESCRIPTION];
      let description = "";
      
      if (typeof descriptionField === "string") {
        description = descriptionField;
      } else if (descriptionField && typeof descriptionField === "object") {
        description = parseRichText(descriptionField as RichTextDocument);
      }
      
      const id = getField<string>(item, FIELD_IDS.PRODUCT_ID, "0");
      
      return {
        key: item.sys.id,
        title: getField<string>(item, FIELD_IDS.PRODUCT_NAME, "Unnamed Product"),
        image: imageUrl,
        thumbnail: imageUrl, // Use same image for now
        id: id,
        sys: { id: item.sys.id },
        description: description.replace(/<[^>]*>/g, ""), // Clean HTML for display
        link: `/product/${id}`
      };
    });
    
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    // Return empty array instead of throwing
    return [];
  }
};

// Fetch stats
export const fetchStats = async (locale = "en-US"): Promise<ContentfulStat[]> => {
  try {
    const client = getContentfulClient();
    
    const response = await client.getEntries({
      content_type: CONTENT_TYPES.STAT,
      locale,
      order: "sys.createdAt",
    });
    
    const stats = response.items.map((item) => {
      return {
        id: item.sys.id,
        number: getField<string>(item, FIELD_IDS.STAT_NUMBER, "0"),
        label: getField<string>(item, FIELD_IDS.STAT_LABEL, "Stat"),
      };
    });
    
    return stats;
  } catch (error) {
    console.error("Error fetching stats:", error);
    // Return default stats instead of throwing
    return [
      { id: '1', number: '25+', label: 'European Markets' },
      { id: '2', number: '₵47M', label: 'Annual Trading Volume' },
      { id: '3', number: '12', label: 'Years of Expertise' },
      { id: '4', number: '150+', label: 'Business Partners' }
    ];
  }
};

// Fetch insights
export const fetchInsights = async (locale = "en-US"): Promise<ContentfulInsight[]> => {
  try {
    const client = getContentfulClient();
    
    const response = await client.getEntries({
      content_type: CONTENT_TYPES.INSIGHT,
      locale,
      order: "-sys.createdAt", // Most recent first
      limit: 3, // Only get the latest 3
    });
    
    const insights = response.items.map((item) => {
      const insightImage = getField<Asset>(item, FIELD_IDS.INSIGHT_IMAGE, undefined);
      const imageUrl = getAssetUrl(insightImage);
      const slug = getField<string>(item, FIELD_IDS.INSIGHT_SLUG, "");
      
      // Handle rich text description if present
      const descriptionField = item.fields[FIELD_IDS.INSIGHT_DESCRIPTION];
      let description = "";
      
      if (typeof descriptionField === "string") {
        description = descriptionField;
      } else if (descriptionField && typeof descriptionField === "object") {
        description = parseRichText(descriptionField as RichTextDocument);
      }
      
      return {
        id: item.sys.id,
        title: getField<string>(item, FIELD_IDS.INSIGHT_TITLE, "Insight"),
        description: description.replace(/<[^>]*>/g, ""), // Clean HTML for display
        image: imageUrl || "/p2.png", // Fallback image
        slug,
        link: `/insights/${slug}`
      };
    });
    
    return insights;
  } catch (error) {
    console.error("Error fetching insights:", error);
    // Return default insights instead of throwing
    return [
      {
        id: '1',
        title: 'Metal Market Analysis',
        description: 'Our latest analysis of global recycling trends, supply constraints, and price forecasts.',
        image: '/p2.png',
        slug: 'metal-market-analysis',
        link: '/insights/metal-market-analysis'
      },
      {
        id: '2',
        title: 'Sustainable Trading Practices',
        description: 'How environmental regulations are shaping the future of commodities trading in European markets.',
        image: '/p3.png',
        slug: 'sustainable-trading',
        link: '/insights/sustainable-trading'
      },
      {
        id: '3',
        title: 'Supply Chain Resilience',
        description: 'Strategic approaches to strengthening supply chains against global disruptions and market volatility.',
        image: '/p4.png',
        slug: 'supply-chain-resilience',
        link: '/insights/supply-chain-resilience'
      }
    ];
  }
};
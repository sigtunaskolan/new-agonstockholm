import { createClient, Entry, EntryCollection, Asset } from "contentful";
import { parseHeaderHeadline } from "./stringUtils";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

// Content type IDs - defining these as constants allows for remote control
export const CONTENT_TYPES = {
  PAGE: "page",
  PRODUCT: "products",
  // Add more content types as needed
};

// Field IDs - defining these as constants allows for remote control
export const FIELD_IDS = {
  // Page fields
  PAGE_IDENTIFIER: "page",
  HEADLINE: "headline",
  SUBHEADLINE: "subheadline",
  BACKGROUND_IMAGE: "backgroundImage",
  
  // Product fields
  PRODUCT_NAME: "name",
  PRODUCT_ID: "id",
  PRODUCT_IMAGE: "productImage",
  PRODUCT_DESCRIPTION: "description",
  PRODUCT_PRICE: "price",
  
  // Add more field IDs as needed
};

// Define proper types for Contentful content
export interface ContentfulHero {
  headline: Array<{
    token: string;
    variant: string;
  }>;
  subHeadline: string;
  bgImg: string;
  richTextContent?: string; // HTML string from rich text
}

export interface ContentfulProduct {
  key: string;
  label: string;
  bgImg: string;
  id: string;
  description?: string; // Optional rich text description
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
    
    // Get the headline
    const headlineRaw = getField<string>(pageEntry, FIELD_IDS.HEADLINE, "");
    const headline = parseHeaderHeadline(headlineRaw);
    
    // Get the subheadline - handle both string and rich text formats
    let subHeadline = "";
    const subheadlineField = pageEntry.fields[FIELD_IDS.SUBHEADLINE];
    
    if (typeof subheadlineField === "string") {
      subHeadline = subheadlineField;
    } else if (subheadlineField && typeof subheadlineField === "object") {
      // Handle rich text
      subHeadline = parseRichText(subheadlineField as RichTextDocument);
    }
    
    // Get background image - use the direct field or default to naming pattern
    const backgroundAsset = getField<Asset>(pageEntry, FIELD_IDS.BACKGROUND_IMAGE, undefined);
    const bgImg = backgroundAsset 
      ? getAssetUrl(backgroundAsset) 
      : `${pageName}.png`; // Default image pattern
    
    const result: ContentfulHero = {
      headline,
      subHeadline: subHeadline.replace(/<[^>]*>/g, ""), // Strip HTML tags for plain text
      richTextContent: subHeadline, // Keep the HTML for rich text rendering
      bgImg,
    };
    
    return result;
  } catch (error) {
    console.error(`Error fetching ${pageName} content:`, error);
    throw error;
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
      
      if (descriptionField && typeof descriptionField === "object") {
        description = parseRichText(descriptionField as RichTextDocument);
      }
      
      return {
        key: item.sys.id,
        label: getField<string>(item, FIELD_IDS.PRODUCT_NAME, "Unnamed Product"),
        bgImg: imageUrl,
        id: getField<string>(item, FIELD_IDS.PRODUCT_ID, "0"),
        description,
      };
    });
    
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
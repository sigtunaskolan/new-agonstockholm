import { createClient } from "contentful";
import { parseHeaderHeadline } from "./stringUtils";

// Define proper types for content
export interface ContentfulHero {
  headline: Array<{
    token: string;
    variant: string;
  }>;
  subHeadline: string;
  bgImg: string;
}

export interface ContentfulProduct {
  key: string;
  label: string;
  bgImg: string;
  id: string;
}

// Create contentful client
const getContentfulClient = () => {
  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  });
};

// Fetch page content
export const fetchPageContent = async (
  pageName: string,
  locale: string
): Promise<ContentfulHero> => {
  try {
    const client = getContentfulClient();
    const response = await client.getEntries();
    
    // Find the correct entry based on locale
    const localeKey = locale === "sv" ? `${pageName}_sv` : pageName;
    const pageEntry = response.items.find((item) => item.fields.page === localeKey);
    
    if (!pageEntry) {
      throw new Error(`Content for ${pageName} not found`);
    }
    
    // Parse the content
    const subheadline = pageEntry.fields?.subheadline as {
      content: Array<{ content: Array<{ value: string }> }>;
    };
    
    const result: ContentfulHero = {
      headline: parseHeaderHeadline(
        (pageEntry.fields?.headline as string) || ""
      ),
      subHeadline: subheadline?.content[0]?.content[0]?.value || "",
      bgImg: `${pageName}.png`, // Default image pattern
    };
    
    return result;
  } catch (error) {
    console.error(`Error fetching ${pageName} content:`, error);
    throw error;
  }
};

// Fetch products
export const fetchProducts = async (): Promise<ContentfulProduct[]> => {
  try {
    const client = getContentfulClient();
    const response = await client.getEntries();
    
    // Filter product entries
    const productEntries = response.items.filter(
      (item) => item.sys.contentType.sys.id === "products"
    );
    
    // Map to proper structure with types
    const products = productEntries
      .map((item) => {
        const productImage = item?.fields?.productImage as { fields: { file: { url: string } } };
        const bgImg = productImage?.fields?.file.url || "";
        return {
          key: item.sys.id,
          label: item.fields.name as string,
          bgImg: `https:${bgImg}`,
          id: item.fields.id as string,
        };
      })
      .sort((a, b) => {
        return Number(a.id) - Number(b.id);
      });
    
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
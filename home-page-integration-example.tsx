"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { useLocale } from "next-intl";
import Hero from "@/components/home/Hero";
import ProductsList from "@/components/home/ProductsList";
import Footer from "@/components/Shared/Footer";
import ThemeProvider from "@/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "@/contextsConfig/MUIThemeProvider";
import Loading from "@/components/Shared/Loading";
import ErrorDisplay from "@/components/Shared/ErrorDisplay";
import { fetchPageContent, fetchProducts, ContentfulHero, ContentfulProduct } from "@/utils/api";
import DesignShowcase from "@/components/DesignShowcase";

// Example interface for the ContentfulProduct that needs to be adapted
interface ProductCategory {
  id: string;
  code: string;
  name: string;
  imageUrl: string;
  link?: string;
}

export default function Home() {
  const locale = useLocale();
  const [content, setContent] = useState<ContentfulHero>({
    headline: [],
    subHeadline: "",
    bgImg: "",
    richTextContent: "",
  });
  const [productItems, setProductItems] = useState<ContentfulProduct[]>([]);
  const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch page content and products in parallel
      const [pageContent, products] = await Promise.all([
        fetchPageContent('home', locale),
        fetchProducts()
      ]);
      
      setContent(pageContent);
      setProductItems(products);
      
      // Transform products to categories - adapt this to your actual data structure
      const categories = products.map(product => ({
        id: product.id || product.sys?.id || String(Math.random()),
        code: product.code || product.title?.substring(0, 2).toUpperCase() || 'XX',
        name: product.title || 'Product',
        imageUrl: product.image || product.thumbnail || '/default.png',
        link: `/product/${product.id || product.sys?.id}`
      }));
      
      setProductCategories(categories);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error loading content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <MUIThemeProvider>
      <ThemeProvider>
        <ContentContext.Provider value={content}>
          <main>
            {loading ? (
              <Loading fullScreen />
            ) : error ? (
              <ErrorDisplay message={error} onRetry={fetchData} />
            ) : (
              <>
                <Hero />
                
                {/* Old ProductsList - can be kept or removed */}
                {/* <ProductsList productItems={productItems} /> */}
                
                {/* New DesignShowcase component */}
                <DesignShowcase 
                  title="Our Recycling Products"
                  subtitle="Explore our range of high-quality metal recycling materials, sourced and processed with sustainability in mind"
                  categories={productCategories}
                  ctaText="View All Products"
                  ctaLink="/product"
                  backgroundImage="/sustainability.jpg"
                />
                
                <Footer />
              </>
            )}
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}
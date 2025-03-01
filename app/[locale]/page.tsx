"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { useLocale } from "next-intl";
import Hero from "@/components/home/Hero";
import ProductsList from "@/components/home/ProductsList";
import Footer from "@/components/Shared/Footer";
import ThemeProvider from "../../src/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "../../src/contextsConfig/MUIThemeProvider";
import Loading from "@/components/Shared/Loading";
import ErrorDisplay from "@/components/Shared/ErrorDisplay";
import { fetchPageContent, fetchProducts, ContentfulHero, ContentfulProduct } from "@/utils/api";

export default function Home() {
  const locale = useLocale();
  const [content, setContent] = useState<ContentfulHero>({
    headline: [],
    subHeadline: "",
    bgImg: "",
    richTextContent: "",
  });
  const [productItems, setProductItems] = useState<ContentfulProduct[]>([]);
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
                <ProductsList productItems={productItems} />
                <Footer />
              </>
            )}
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

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
import MarketInsights from "@/components/home/MarketInsights";

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
                <section className="section section-dark">
                  <h2 className="section-title">Our Global Reach</h2>
                  <div className="stats-container">
                    <div className="stat">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">Countries Served</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">$840M</div>
                      <div className="stat-label">Annual Trading Volume</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">15</div>
                      <div className="stat-label">Years of Expertise</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">180+</div>
                      <div className="stat-label">Partnerships</div>
                    </div>
                  </div>
                </section>
                <MarketInsights />
                <Footer />
              </>
            )}
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

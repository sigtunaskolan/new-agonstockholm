"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { useLocale } from "next-intl";
import Hero from "../../../src/components/contact/Hero";
import data from "../../../src/contextsConfig/content/data";
import ThemeProvider from "../../../src/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "../../../src/contextsConfig/MUIThemeProvider";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Shared/Footer";
import { fetchPageContent } from "@/utils/api";
import Loading from "@/components/Shared/Loading";
import ErrorDisplay from "@/components/Shared/ErrorDisplay";

type HeroProps = {
  headline: Array<{
    token: string;
    variant: string;
  }>;
  subHeadline: string;
  bgImg: string;
  richTextContent?: string;
};

export default function Contact() {
  const locale = useLocale();
  const [content, setContent] = useState<HeroProps>({
    headline: [],
    subHeadline: "",
    bgImg: "",
    richTextContent: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Use the enhanced API service
      const pageContent = await fetchPageContent('contact', locale);
      
      const contentTemp = {
        ...pageContent,
        bgImg: pageContent.bgImg || data.contact.bgImg || "",
      };
      
      setContent(contentTemp);
    } catch (err) {
      console.error("Error fetching contact page data:", err);
      setError("Failed to load contact page content. Please try again.");
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
                <ContactSection />
                <Footer />
              </>
            )}
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

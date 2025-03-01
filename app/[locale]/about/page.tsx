"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { useLocale } from "next-intl";
import SectionsList from "@/Sections/SectionsList";
import Hero from "../../../src/components/about/Hero";
import data from "../../../src/contextsConfig/content/data";
import ThemeProvider from "../../../src/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "../../../src/contextsConfig/MUIThemeProvider";
import { StatSectionProps } from "../../../src/Sections/StatSection/types";
import { formatSectionsArray } from "@/utils/dataFormater";
import Footer from "@/components/Shared/Footer";
import { fetchPageContent } from "@/utils/api";
import Loading from "@/components/Shared/Loading";
import ErrorDisplay from "@/components/Shared/ErrorDisplay";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

type HeroProps = {
  headline: Array<{
    token: string;
    variant: string;
  }>;
  subHeadline: string;
  bgImg: string;
  richTextContent?: string;
  sections?: Array<StatSectionProps>;
};

export default function About() {
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
      const pageContent = await fetchPageContent('about', locale);
      
      // Get sections from the returned content or API
      // This is a placeholder - you'll need to implement section fetching
      const sections = [] as Array<StatSectionProps>;
      
      const contentTemp = {
        ...pageContent,
        bgImg: pageContent.bgImg || data.about.bgImg || "",
        sections,
      };
      
      setContent(contentTemp);
    } catch (err) {
      console.error("Error fetching about page data:", err);
      setError("Failed to load about page content. Please try again.");
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
                <SectionsList />
                <Footer />
              </>
            )}
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

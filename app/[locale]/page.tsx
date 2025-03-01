"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { useLocale } from "next-intl";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import ThemeProvider from "@/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "@/contextsConfig/MUIThemeProvider";
import Loading from "@/components/Shared/Loading";
import ErrorDisplay from "@/components/Shared/ErrorDisplay";
import { 
  fetchPageContent, fetchProducts, fetchStats, fetchInsights,
  ContentfulHero, ContentfulProduct, ContentfulStat, ContentfulInsight 
} from "@/utils/api";

// Import the styled components from LandingPage
import * as S from '@/components/LandingPage/container';

export default function Home() {
  const locale = useLocale();
  const [content, setContent] = useState<ContentfulHero>({
    headline: [],
    subHeadline: "",
    bgImg: "",
    richTextContent: "",
  });
  const [products, setProducts] = useState<ContentfulProduct[]>([]);
  const [stats, setStats] = useState<ContentfulStat[]>([]);
  const [insights, setInsights] = useState<ContentfulInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Default values to ensure UI doesn't break if data is missing
  const defaultProducts: ContentfulProduct[] = [
    { key: 'default1', id: 'copper', title: 'Copper', description: 'High-quality copper scrap and recycled materials', image: '/p1.png' },
    { key: 'default2', id: 'brass', title: 'Brass', description: 'Premium brass materials for industrial applications', image: '/p2.png' },
    { key: 'default3', id: 'aluminum', title: 'Aluminum', description: 'Recycled aluminum for sustainable manufacturing', image: '/p3.png' },
  ];

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch all data in parallel for better performance
      const [pageContent, productsData, statsData, insightsData] = await Promise.all([
        fetchPageContent('home', locale),
        fetchProducts(locale === 'sv' ? 'sv-SE' : 'en-US'),
        fetchStats(locale === 'sv' ? 'sv-SE' : 'en-US'),
        fetchInsights(locale === 'sv' ? 'sv-SE' : 'en-US')
      ]);
      
      setContent(pageContent);
      setProducts(productsData);
      setStats(statsData);
      setInsights(insightsData);
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
                <Header />
                
                {/* Hero section */}
                <S.Hero style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${content.bgImg && content.bgImg.startsWith('http') ? content.bgImg : `/${content.bgImg || 'home.png'}`})`
                }}>
                  <S.HeroContent>
                    <S.H1>
                      {content.headline && content.headline.length > 0 
                        ? content.headline.map((part, index) => 
                            // Make the second part the highlighted one (index 1)
                            index === 1 ? <S.Span key={index}>{part}</S.Span> : part
                          )
                        : (
                          <>
                            Global <S.Span>Recycling</S.Span> Solutions
                          </>
                        )
                      }
                    </S.H1>
                    <S.Subtitle>{content.subHeadline || 'From Europe to Asia, connecting markets with exceptional service and expertise'}</S.Subtitle>
                    <S.HeroButtons>
                      <S.CtaButton as="a" href={`/${locale}/services`}>
                        Our Services
                      </S.CtaButton>
                      <S.SecondaryButton as="a" href={`/${locale}/about`}>
                        Learn More
                        <S.ArrowIcon 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </S.ArrowIcon>
                      </S.SecondaryButton>
                    </S.HeroButtons>
                  </S.HeroContent>
                </S.Hero>
                
                {/* Products section */}
                <S.Section>
                  <S.SectionTitle>Our Products</S.SectionTitle>
                  <S.Grid>
                    {(products.length > 0 ? products : defaultProducts).slice(0, 3).map(product => (
                      <S.Card key={product.id || product.key}>
                        <a href={`/${locale}/product/${product.id || ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <S.CardImg style={{ backgroundImage: `url(${product.image || `/p${Math.floor(Math.random() * 6) + 1}.png`})` }} />
                          <S.CardContent>
                            <S.CardTitle>{product.title || 'Product'}</S.CardTitle>
                            <S.CardText>{product.description || 'High-quality recycled materials'}</S.CardText>
                          </S.CardContent>
                        </a>
                      </S.Card>
                    ))}
                  </S.Grid>
                </S.Section>
                
                {/* Stats section */}
                <S.Section dark={true}>
                  <S.SectionTitle>Our Global Reach</S.SectionTitle>
                  <S.StatsContainer>
                    {stats.map((stat) => (
                      <S.Stat key={stat.id}>
                        <S.StatNumber>{stat.number}</S.StatNumber>
                        <S.StatLabel>{stat.label}</S.StatLabel>
                      </S.Stat>
                    ))}
                  </S.StatsContainer>
                </S.Section>
                
                {/* Insights section */}
                <S.Section>
                  <S.SectionTitle>Market Insights</S.SectionTitle>
                  <S.Grid>
                    {insights.map(insight => (
                      <S.Card key={insight.id}>
                        <a href={`/${locale}${insight.link}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <S.CardImg style={{ backgroundImage: `url(${insight.image})` }} />
                          <S.CardContent>
                            <S.CardTitle>{insight.title}</S.CardTitle>
                            <S.CardText>{insight.description}</S.CardText>
                          </S.CardContent>
                        </a>
                      </S.Card>
                    ))}
                  </S.Grid>
                </S.Section>
                
                <Footer />
              </>
            )}
          </main>
        </ContentContext.Provider>
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

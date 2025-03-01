"use client";
import React, { useEffect, useState } from "react";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { useLocale } from "next-intl";
import ThemeProvider from "@/contextsConfig/theme/ThemeProvider";
import MUIThemeProvider from "@/contextsConfig/MUIThemeProvider";
import Loading from "@/components/Shared/Loading";
import ErrorDisplay from "@/components/Shared/ErrorDisplay";
import { fetchPageContent, fetchProducts, ContentfulHero, ContentfulProduct } from "@/utils/api";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

// Importing the styled components from LandingPage
import * as S from '@/components/LandingPage/container';

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

  // Define stats data
  const stats = [
    { number: '25+', label: 'Countries Served' },
    { number: '₵50M', label: 'Annual Trading Volume' },
    { number: '15', label: 'Years of Expertise' },
    { number: '180+', label: 'Partnerships' }
  ];

  // Define insights data
  const insights = [
    {
      id: '1',
      title: 'Metal Market Analysis',
      description: 'Our latest analysis of global recycling trends, supply constraints, and price forecasts.',
      image: '/p2.png'
    },
    {
      id: '2',
      title: 'Sustainable Trading Practices',
      description: 'How environmental regulations are shaping the future of commodities trading in European markets.',
      image: '/p3.png'
    },
    {
      id: '3',
      title: 'Supply Chain Resilience',
      description: 'Strategic approaches to strengthening supply chains against global disruptions and market volatility.',
      image: '/p4.png'
    }
  ];

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

  // Transform products to markets format
  const markets = productItems.slice(0, 3).map(product => ({
    id: product.id || product.sys?.id || String(Math.random()),
    title: product.title || 'Product',
    description: product.description || 'Expert recycling solution for diverse customer needs.',
    image: product.image || product.thumbnail || '/default.png'
  }));

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
                <S.Hero style={{ marginTop: '80px' }}>
                  <S.HeroContent>
                    <S.H1>
                      Global <S.Span>Recycling</S.Span> Solutions
                    </S.H1>
                    <S.Subtitle>{content.subHeadline || 'From Europe to Asia, connecting markets with exceptional service and expertise'}</S.Subtitle>
                    <S.HeroButtons>
                      <S.CtaButton as="a" href={`/${locale}/services`}>Our Services</S.CtaButton>
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
                
                {/* Markets section */}
                <S.Section>
                  <S.SectionTitle>Our Markets</S.SectionTitle>
                  <S.Grid>
                    {markets.map(market => (
                      <S.Card key={market.id}>
                        <S.CardImg style={{ backgroundImage: `url(${market.image})` }} />
                        <S.CardContent>
                          <S.CardTitle>{market.title}</S.CardTitle>
                          <S.CardText>{market.description}</S.CardText>
                        </S.CardContent>
                      </S.Card>
                    ))}
                  </S.Grid>
                </S.Section>
                
                {/* Stats section */}
                <S.Section dark={true}>
                  <S.SectionTitle>Our Global Reach</S.SectionTitle>
                  <S.StatsContainer>
                    {stats.map((stat, index) => (
                      <S.Stat key={index}>
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
                        <S.CardImg style={{ backgroundImage: `url(${insight.image})` }} />
                        <S.CardContent>
                          <S.CardTitle>{insight.title}</S.CardTitle>
                          <S.CardText>{insight.description}</S.CardText>
                        </S.CardContent>
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
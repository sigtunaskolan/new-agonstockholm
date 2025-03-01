import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as S from './container';
import { useLocale } from 'next-intl';

// Define interfaces for our data
interface Market {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Stat {
  number: string;
  label: string;
}

interface Insight {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface LandingPageProps {
  markets?: Market[];
  stats?: Stat[];
  insights?: Insight[];
  footerSections?: FooterSection[];
}

const LandingPage: React.FC<LandingPageProps> = ({
  markets = [],
  stats = [],
  insights = [],
  footerSections = []
}) => {
  const locale = useLocale();
  
  // Default data if not provided
  const defaultMarkets: Market[] = [
    {
      id: '1',
      title: 'Non-ferrous Metals',
      description: 'Expert trading in copper, aluminum, zinc, and other essential non-ferrous metals for global industries.',
      image: '/p1.png'
    },
    {
      id: '2',
      title: 'Steel Products',
      description: 'Reliable supply of recycled steel and refined products to meet diverse customer needs.',
      image: '/st.png'
    },
    {
      id: '3',
      title: 'Mixed Metal Recycling',
      description: 'Sustainable trading solutions for various scrap metals across key markets.',
      image: '/mi.png'
    }
  ];

  const defaultStats: Stat[] = [
    { number: '25+', label: 'Countries Served' },
    { number: '₵50M', label: 'Annual Trading Volume' },
    { number: '15', label: 'Years of Expertise' },
    { number: '180+', label: 'Partnerships' }
  ];

  const defaultInsights: Insight[] = [
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

  const defaultFooterSections: FooterSection[] = [
    {
      title: 'About Agon',
      links: [
        { title: 'Our Story', href: '/about' },
        { title: 'Leadership', href: '/about#leadership' },
        { title: 'Careers', href: '/careers' },
        { title: 'Sustainability', href: '/sustainability' }
      ]
    },
    {
      title: 'Services',
      links: [
        { title: 'Trading', href: '/services#trading' },
        { title: 'Logistics', href: '/services#logistics' },
        { title: 'Recycling', href: '/services#recycling' },
        { title: 'Market Intelligence', href: '/services#intelligence' }
      ]
    },
    {
      title: 'Markets',
      links: [
        { title: 'Metals', href: '/markets#metals' },
        { title: 'Steel', href: '/markets#steel' },
        { title: 'Recycling', href: '/markets#recycling' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { title: 'Stockholm Office', href: '/contact' },
        { title: 'info@agonstockholm.com', href: 'mailto:info@agonstockholm.com' },
        { title: '+46 8 123 45 67', href: 'tel:+46812345678' }
      ]
    }
  ];

  // Use provided data or defaults
  const displayMarkets = markets.length > 0 ? markets : defaultMarkets;
  const displayStats = stats.length > 0 ? stats : defaultStats;
  const displayInsights = insights.length > 0 ? insights : defaultInsights;
  const displayFooterSections = footerSections.length > 0 ? footerSections : defaultFooterSections;

  return (
    <S.LandingWrapper>
      <S.Navbar>
        <S.Logo as={Link} href={`/${locale}`}>
          Agon
        </S.Logo>
        <S.NavLinks>
          <S.NavLink as={Link} href={`/${locale}/product`}>
            Markets
          </S.NavLink>
          <S.NavLink as={Link} href={`/${locale}/services`}>
            Services
          </S.NavLink>
          <S.NavLink as={Link} href={`/${locale}/insights`}>
            Insights
          </S.NavLink>
          <S.NavLink as={Link} href={`/${locale}/about`}>
            About
          </S.NavLink>
          <S.NavLink as={Link} href={`/${locale}/contact`}>
            Contact
          </S.NavLink>
        </S.NavLinks>
        <S.CtaButton as={Link} href={`/${locale}/client`}>
          Client Portal
        </S.CtaButton>
      </S.Navbar>
      
      <S.Hero>
        <S.HeroContent>
          <S.H1>
            Global <S.Span>Recycling</S.Span> Solutions
          </S.H1>
          <S.Subtitle>From Europe to Asia, connecting markets with exceptional service and expertise</S.Subtitle>
          <S.HeroButtons>
            <S.CtaButton as={Link} href={`/${locale}/services`}>
              Our Services
            </S.CtaButton>
            <S.SecondaryButton as={Link} href={`/${locale}/about`}>
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
      
      <S.Section>
        <S.SectionTitle>Our Markets</S.SectionTitle>
        <S.Grid>
          {displayMarkets.map(market => (
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
      
      <S.Section dark={true}>
        <S.SectionTitle>Our Global Reach</S.SectionTitle>
        <S.StatsContainer>
          {displayStats.map((stat, index) => (
            <S.Stat key={index}>
              <S.StatNumber>{stat.number}</S.StatNumber>
              <S.StatLabel>{stat.label}</S.StatLabel>
            </S.Stat>
          ))}
        </S.StatsContainer>
      </S.Section>
      
      <S.Section>
        <S.SectionTitle>Market Insights</S.SectionTitle>
        <S.Grid>
          {displayInsights.map(insight => (
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
      
      <S.Footer>
        <S.FooterContent>
          {displayFooterSections.map((section, index) => (
            <S.FooterColumn key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </S.FooterColumn>
          ))}
        </S.FooterContent>
        <S.Copyright>
          © {new Date().getFullYear()} Agonstockholm. All rights reserved.
        </S.Copyright>
      </S.Footer>
    </S.LandingWrapper>
  );
};

export default LandingPage;
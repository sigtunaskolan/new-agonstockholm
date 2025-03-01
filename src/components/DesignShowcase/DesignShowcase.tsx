import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@emotion/react';
import * as S from './container';

export interface ProductCategory {
  id: string;
  code: string;
  name: string;
  imageUrl: string;
  link?: string;
}

export interface DesignShowcaseProps {
  title: string;
  subtitle?: string;
  categories: ProductCategory[];
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const DesignShowcase: React.FC<DesignShowcaseProps> = ({
  title,
  subtitle,
  categories,
  ctaText = "View All Products",
  ctaLink = "/products",
  backgroundImage
}) => {
  const theme = useTheme();

  return (
    <S.ShowcaseWrapper>
      <S.BackgroundHeader 
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      >
        <div className="overlay"></div>
      </S.BackgroundHeader>
      
      <S.ContentContainer>
        <S.HeaderSection>
          <S.Title>{title}</S.Title>
          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        </S.HeaderSection>
        
        <S.CategoriesGrid>
          {categories.map((category) => (
            <Link 
              href={category.link || `/product/${category.id}`} 
              key={category.id}
              style={{ textDecoration: 'none' }}
            >
              <S.CategoryItem>
                <S.ImageContainer>
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    priority={categories.indexOf(category) < 4}
                  />
                </S.ImageContainer>
                <S.CategoryInfo>
                  <S.CategoryCode>{category.code}</S.CategoryCode>
                  <S.CategoryName>{category.name}</S.CategoryName>
                </S.CategoryInfo>
              </S.CategoryItem>
            </Link>
          ))}
        </S.CategoriesGrid>
        
        {ctaText && ctaLink && (
          <Link href={ctaLink} style={{ textDecoration: 'none' }}>
            <S.CtaButton>{ctaText}</S.CtaButton>
          </Link>
        )}
      </S.ContentContainer>
    </S.ShowcaseWrapper>
  );
};

export default DesignShowcase;
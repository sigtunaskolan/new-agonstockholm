// DesignShowcase/DesignShowcase.tsx
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import * as S from './container';

export interface ProductCategory {
  id: string;
  code: string;
  name: string;
  imageUrl: string;
}

export interface DesignShowcaseProps {
  title: string;
  subtitle?: string;
  categories: ProductCategory[];
}

const DesignShowcase: React.FC<DesignShowcaseProps> = ({
  title,
  subtitle,
  categories
}) => {
  const theme = useTheme();

  return (
    <S.ShowcaseWrapper>
      <S.BackgroundHeader>
        <div className="overlay"></div>
      </S.BackgroundHeader>
      
      <S.ContentContainer>
        <S.HeaderSection>
          <S.Title>{title}</S.Title>
          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        </S.HeaderSection>
        
        <S.CategoriesGrid>
          {categories.map((category) => (
            <S.CategoryItem key={category.id}>
              <S.ImageContainer>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={true}
                />
              </S.ImageContainer>
              <S.CategoryCode>{category.code}</S.CategoryCode>
            </S.CategoryItem>
          ))}
        </S.CategoriesGrid>
      </S.ContentContainer>
    </S.ShowcaseWrapper>
  );
};

export default DesignShowcase;

// DesignShowcase/container.ts
import styled from '@emotion/styled';

export const ShowcaseWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const BackgroundHeader = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-image: url('/images/metal-scraps-bg.jpg');
  background-size: cover;
  background-position: center;
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 250px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth || '1200px'};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(3)};
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0 ${({ theme }) => theme.spacing(2)};
  }
`;

export const HeaderSection = styled.div`
  margin-top: -100px;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(4)};
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: -80px;
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing(1)};
  line-height: 1.2;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 2.5rem;
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin: 0;
  max-width: 800px;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    grid-template-columns: repeat(4, 1fr);
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CategoryItem = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    
    &::after {
      opacity: 0.7;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.8) 100%
    );
    opacity: 0.5;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CategoryCode = styled.span`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)};
  left: ${({ theme }) => theme.spacing(2)};
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  z-index: 2;
  text-transform: uppercase;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1rem;
    bottom: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(1)};
  }
`;

// DesignShowcase/index.ts
export { default } from './DesignShowcase';
export type { DesignShowcaseProps, ProductCategory } from './DesignShowcase';

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
  background-color: ${({ theme }) => theme.colors.secondary};
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
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    height: 250px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding: 0 1rem;
  }
`;

export const HeaderSection = styled.div`
  margin-top: -100px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    margin-top: -80px;
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 0 0.5rem;
  line-height: 1.2;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5rem;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.grayDark};
  margin: 1rem 0 0;
  max-width: 800px;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 1rem;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryItem = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    
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
      rgba(0, 0, 0, 0) 60%,
      ${({ theme }) => theme.colors.secondary} 100%
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

export const CategoryInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const CategoryCode = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 1.5rem;
  }
`;

export const CategoryName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 1.125rem;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 1rem;
  }
`;

export const CtaButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  align-self: flex-start;
  margin-top: 2rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;
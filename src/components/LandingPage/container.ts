import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Root styles from the mockup
export const LandingWrapper = styled.div`
  /* Using Agon's existing colors from theme instead of custom CSS vars */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  overflow-x: hidden;
`;

// Navbar styles
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: absolute;
  width: 100%;
  z-index: 100;
`;

export const Logo = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`;

export const CtaButton = styled.button`
  background-color: var(--secondary);
  color: var(--dark);
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    transform: translateY(-2px);
  }
`;

// Hero section styles
export const Hero = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 0 5%;
  position: relative;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
`;

export const H1 = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Span = styled.span`
  color: var(--secondary);
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: 300;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: white;
    color: var(--dark);
  }
`;

// Section styles
export const Section = styled.section<{ dark?: boolean }>`
  padding: 6rem 5%;
  
  ${({ dark }) => dark && css`
    background-color: var(--dark);
    color: white;
  `}
  
  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 5rem;
    height: 4px;
    background-color: var(--secondary);
  }
`;

// Grid and card styles
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImg = styled.div`
  height: 200px;
  background: var(--primary);
  background-size: cover;
  background-position: center;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const CardText = styled.p`
  color: #777;
  line-height: 1.6;
`;

// Stats section styles
export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Stat = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1.2rem;
  color: #aaa;
`;

// Footer styles
export const Footer = styled.footer`
  background-color: var(--dark);
  color: white;
  padding: 4rem 5% 2rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const FooterColumn = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 3rem;
      height: 2px;
      background-color: var(--secondary);
    }
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.8rem;
    }
    
    a {
      color: #aaa;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        color: var(--secondary);
      }
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: #777;
  padding-top: 2rem;
  border-top: 1px solid #333;
`;

// SVG Icon styled component
export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
`;
import * as React from "react";
import Container from "./container";
import { useTheme } from "@emotion/react";
import * as S from '@/components/LandingPage/container';

function Button() {
  const theme = useTheme();
  const { locale = 'en' } = { locale: 'en' }; // Hard-coded for this example

  return (
    <S.HeroButtons>
      <S.CtaButton as="a" href={`/${locale}/contact`}>
        Contact Us
      </S.CtaButton>
      <S.SecondaryButton as="a" href="#details">
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
  );
}

export default Button;

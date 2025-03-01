import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import styled from "@emotion/styled";

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

interface CtaButtonProps {
  color?: string;
  textColor?: string;
  border?: string;
  hoverColor?: string;
  hoverTextColor?: string;
}

const CtaButton = styled.button<CtaButtonProps>`
  background-color: ${props => props.color || 'var(--secondary)'};
  color: ${props => props.textColor || 'var(--dark)'};
  border: ${props => props.border || 'none'};
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.hoverColor || 'white'};
    transform: translateY(-2px);
    color: ${props => props.hoverTextColor || 'var(--dark)'};
  }
`;

export default function CTA() {
  const locale = useLocale();

  return (
    <HeroButtons>
      <Link href={"/contact"} locale={locale}>
        <CtaButton color="var(--secondary)">Our Services</CtaButton>
      </Link>
      <a href="#productsList">
        <CtaButton 
          color="transparent" 
          textColor="white" 
          border="2px solid white"
          hoverColor="white"
          hoverTextColor="var(--dark)"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </CtaButton>
      </a>
    </HeroButtons>
  );
}

import React, { useEffect, useState } from "react";
import { Grow } from "@mui/material";
import Container from "./container";
import Headline from "./Headline";
import SubHeadline from "./SubHeadline";
import CTA from "../CTA";
import styled from "@emotion/styled";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  width: 100%;
  z-index: 100;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`;

const CtaButton = styled.button`
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

const HeroContentWrapper = styled.div`
  max-width: 800px;
  z-index: 1;
  padding: 0 5%;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FullHeightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export default function Hero() {
  const [show, setShow] = React.useState(false);
  const [bgImg, setBgImg] = useState("default.png");

  useEffect(() => {
    setShow(true);
    const tempBgImg = window.innerWidth <= 768 ? "homeMobile.png" : "home.png";
    setBgImg(tempBgImg);
  }, []);

  return (
    <Container bgImg={bgImg}>
      <FullHeightWrapper>
        <NavBar>
          <Logo href="#">Agon</Logo>
          <NavLinks>
            <NavLink href="#">Markets</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">Insights</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </NavLinks>
          <CtaButton>Client Portal</CtaButton>
        </NavBar>
        
        <HeroContentWrapper>
          <Grow in={show} timeout={1000}>
            <div>
              <Headline />
            </div>
          </Grow>
          <Grow in={show} timeout={2000}>
            <div>
              <SubHeadline />
            </div>
          </Grow>
          <Grow in={show} timeout={3000}>
            <div>
              <CTA />
            </div>
          </Grow>
        </HeroContentWrapper>
      </FullHeightWrapper>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { Grow, Box } from "@mui/material";
import Header from "../../Shared/Header";
import Container from "./container";
import Headline from "./Headline";
import SubHeadline from "./SubHeadline";
import CTA from "../CTA";
import * as S from '@/components/LandingPage/container';

export default function Hero() {
  const [show, setShow] = React.useState(false);
  const [bgImg, setBgImg] = useState("default.png");

  useEffect(() => {
    setShow(true);
    const tempBgImg =
      window.innerWidth <= 768 ? "aboutMobile.png" : "about.png";
    setBgImg(tempBgImg);
  }, []);

  // Updated hero to match landing page styling
  return (
    <Container bgImg={bgImg}>
      <div>
        <Header />
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
      </div>
      <Grow in={show} timeout={3000}>
        <div>
          <CTA />
        </div>
      </Grow>
    </Container>
  );
}

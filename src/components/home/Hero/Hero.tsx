import React, { useEffect, useState } from "react";
import { Grow, Box, Fade } from "@mui/material";
import Header from "../../Shared/Header";
import Container from "./container";
import Headline from "./Headline";
import SubHeadline from "./SubHeadline";
import CTA from "../CTA";
import GoDownButton from "@/components/Shared/GoDownButton";

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
      <div>
        <Box mb={{ xs: "80px", md: "140px" }}>
          <Header />
        </Box>
        <Fade in={show} timeout={800}>
          <div>
            <Headline />
          </div>
        </Fade>
        <Fade in={show} timeout={1200}>
          <div>
            <SubHeadline />
          </div>
        </Fade>
      </div>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        <Grow in={show} timeout={1600}>
          <div>
            <CTA />
          </div>
        </Grow>
        <Fade in={show} timeout={2000}>
          <div>
            <GoDownButton href="#productsList" />
          </div>
        </Fade>
      </Box>
    </Container>
  );
}

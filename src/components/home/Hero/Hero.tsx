import React, { useEffect, useState } from "react";
import { Grow, Box } from "@mui/material";
import Header from "../../Shared/Header";
import Container from "./container";
import Headline from "./Headline";
import SubHeadline from "./SubHeadline";
import CTA from "../CTA";

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
        <Box mb="140px">
          <Header />
        </Box>
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

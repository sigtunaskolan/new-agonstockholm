"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { BgImg } from "@/contextsConfig/content/contentType";

type Props = {
  bgImg: BgImg;
  children: ReactNode;
};
const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.colors.secondary,
  };
});

const GradientOverlay = styled("div")(() => {
  const theme = useTheme();
  return {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: 10,
    paddingTop: "30px",
    paddingLeft: "140px",
    paddingRight: "140px",
    background:
      "linear-gradient(to bottom, rgba(10, 10, 10, 0), rgba(10, 10, 10, 0.9))",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingBottom: "100px",
    },
  };
});

export default function GradientBackgroundComponent({
  children,
  bgImg,
}: Props) {
  return (
    <Container>
      <Image 
        src={`/${bgImg}`} 
        fill 
        className="z-0 object-cover" 
        alt="Background"
        priority
        sizes="100vw"
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      />
      <GradientOverlay>{children}</GradientOverlay>
    </Container>
  );
}

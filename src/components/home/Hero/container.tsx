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
    backgroundColor: theme.colors.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Change to top alignment
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
    padding: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingLeft: "0",
      paddingRight: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      paddingBottom: "0",
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

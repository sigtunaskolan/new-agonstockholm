"use client";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";

type Props = {
  bgImg: string;
  children: ReactNode;
};

const Container = styled.div(() => {
  const theme = useTheme();

  return {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: theme.colors.secondary,
    [`@media (max-width: ${theme.breakPoint.desktop})`]: {
      width: "100%",
    },
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      width: "100%",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      width: "100%",
    },
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
    display: "flex",
    flexDirection: "column",
    background: `
      linear-gradient(
        135deg, 
        rgba(10, 10, 10, 0.7), 
        rgba(10, 10, 10, 0.4) 50%,
        rgba(${theme.colors.primary.replace('rgb(', '').replace(')', '')}, 0.3)
      )
    `,
    backdropFilter: "blur(4px)",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      background: `
        linear-gradient(
          to bottom,
          rgba(10, 10, 10, 0.8),
          rgba(${theme.colors.primary.replace('rgb(', '').replace(')', '')}, 0.6)
        )
      `,
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
        src={bgImg} 
        alt="Product background" 
        fill 
        className="z-0 object-cover"
        priority
        sizes="100vw"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      />
      <GradientOverlay>{children}</GradientOverlay>
    </Container>
  );
}

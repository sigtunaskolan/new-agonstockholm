"use client";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

type Props = {
  bgImg: string;
  children: ReactNode;
};
type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  bgImg: string;
};

const Container = styled.div<ContainerProps>(({ bgImg }) => {
  const theme = useTheme();

  return {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: theme.colors.secondary,
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
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
    background:
      "linear-gradient(to right, rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5))",
    backdropFilter: "blur(8px)",
  };
});

export default function GradientBackgroundComponent({
  children,
  bgImg,
}: Props) {
  return (
    <Container bgImg={bgImg}>
      <GradientOverlay>{children}</GradientOverlay>
    </Container>
  );
}

"use client";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    height: "100vh",
    width: "100vw",
    paddingTop: "120px",
    paddingBottom: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      height: "auto",
      paddingTop: "30px",
      paddingBottom: "60px",
    },
  };
});

export default Container;

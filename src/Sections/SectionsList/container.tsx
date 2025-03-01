"use client";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "100px",
    backgroundColor: theme.colors.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  };
});

export default Container;

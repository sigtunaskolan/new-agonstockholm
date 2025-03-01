"use client";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    width: "100%",
    padding: "6rem 5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      padding: "4rem 5%",
    },
  };
});

export default Container;

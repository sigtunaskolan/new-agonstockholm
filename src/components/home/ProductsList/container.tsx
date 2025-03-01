"use client";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    minHeight: "100vh",
    width: "100%",
    maxWidth: "100vw",
    paddingTop: "120px",
    paddingBottom: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    boxShadow: "0px -10px 30px rgba(0, 0, 0, 0.1)",
    borderTop: `1px solid ${theme.colors.silverGray}20`,
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "10px",
      background: `linear-gradient(to bottom, ${theme.colors.silverGray}15, transparent)`,
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      minHeight: "auto",
      paddingTop: "60px",
      paddingBottom: "80px",
    },
  };
});

export default Container;

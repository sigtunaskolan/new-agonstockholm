import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    paddingTop: "120px",
    paddingBottom: "60px",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "60px",
    [`@media (max-width: ${theme.breakPoint.desktop})`]: {
      width: "100%",
      paddingTop: "80px",
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      width: "100%",
      paddingTop: "60px",
      paddingLeft: "40px",
      paddingRight: "40px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      width: "100%",
      paddingTop: "40px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  };
});

export default Container;

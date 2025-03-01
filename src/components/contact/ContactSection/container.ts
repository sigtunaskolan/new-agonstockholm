import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    paddingTop: "120px",
    paddingBottom: "60px",
    paddingLeft: "140px",
    paddingRight: "140px",
    minHeight: "100vh",
    backgroundColor: theme.colors.white,
    [`@media (max-width: ${theme.breakPoint.desktop})`]: {
      paddingTop: "80px",
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      paddingTop: "60px",
      paddingLeft: "60px",
      paddingRight: "60px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingTop: "40px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  };
});

export default Container;

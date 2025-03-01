import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    height: "100%",
    paddingTop: "60px",
    paddingBottom: "60px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.colors.white,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    [`@media (max-width: ${theme.breakPoint.desktop})`]: {
      paddingTop: "50px",
      paddingBottom: "50px",
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      paddingTop: "45px",
      paddingBottom: "45px",
      paddingLeft: "45px",
      paddingRight: "45px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingTop: "40px",
      paddingBottom: "40px",
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  };
});

export default Container;

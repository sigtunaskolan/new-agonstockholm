import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    paddingTop: "60px",
    paddingBottom: "60px",
    paddingLeft: "140px",
    paddingRight: "140px",
    width: "100%",
    backgroundColor: theme.colors.black,
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      paddingTop: "60px",
      paddingBottom: "60px",
      paddingLeft: "100px",
      paddingRight: "100px",
      width: "100%",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingTop: "60px",
      paddingBottom: "60px",
      paddingLeft: "0px",
      paddingRight: "0px",
      width: "100%",
    },
  };
});

export default Container;

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    width: "100%",
    marginTop: "40px",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor: theme.colors.secondaryDark,
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      marginTop: "30px",
      paddingTop: "25px",
      paddingBottom: "25px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      marginTop: "30px",
      paddingTop: "25px",
      paddingBottom: "25px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  };
});

export default Container;

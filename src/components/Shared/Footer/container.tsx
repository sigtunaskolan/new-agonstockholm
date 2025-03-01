import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("footer")(() => {
  const theme = useTheme();
  return {
    paddingTop: "80px",
    paddingBottom: "40px",
    paddingLeft: "140px",
    paddingRight: "140px",
    width: "100%",
    backgroundColor: theme.colors.black,
    boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.05)",
    position: "relative",
    zIndex: 1,
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      paddingTop: "60px",
      paddingBottom: "40px",
      paddingLeft: "60px",
      paddingRight: "60px",
      width: "100%",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingTop: "60px",
      paddingBottom: "40px",
      paddingLeft: "20px",
      paddingRight: "20px",
      width: "100%",
    },
  };
});

export default Container;

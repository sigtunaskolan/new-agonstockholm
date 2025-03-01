import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    width: "100%",
    marginBottom: "48px",
    paddingRight: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      justifyContent: "center",
      maxWidth: "400px",
      paddingRight: "30px",
    },
  };
});

export default Container;

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "50px",
    width: "100%",
    marginBottom: "32px",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      justifyContent: "center",
      marginBottom: "60px",
    },
  };
});

export default Container;

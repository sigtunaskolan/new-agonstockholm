import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    maxWidth: "900px",
    width: "100%",
    marginBottom: "48px",
    display: "flex",
    flexDirection: "row",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      maxWidth: "100%",
    },
  };
});

export default Container;

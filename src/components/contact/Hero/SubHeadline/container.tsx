import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    marginBottom: "48px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      justifyContent: "center",
    },
  };
});

export default Container;

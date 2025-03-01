import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    marginBottom: "32px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      justifyContent: "center",
    },
  };
});

export default Container;

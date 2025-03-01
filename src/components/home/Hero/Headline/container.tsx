import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    maxWidth: "900px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      justifyContent: "center",
    },
  };
});

export default Container;

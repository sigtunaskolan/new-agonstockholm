import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    maxWidth: "900px",
    marginBottom: "32px",
    display: "block", // Change to block display
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      textAlign: "center",
    },
  };
});

export default Container;

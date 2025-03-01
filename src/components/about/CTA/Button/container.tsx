import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    height: "55px",
    width: "55px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.colors.primary,
    },
    "&:hover *": {
      color: theme.colors.primary,
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      display: "flex",
    },
  };
});

export default Container;

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingRight: "30px",
    cursor: "pointer",
    [`@media (max-width: ${theme.breakPoint.desktop})`]: {
      paddingRight: "16px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingRight: "30px",
    },
  };
});

export default Container;

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Text = styled("span")(() => {
  const theme = useTheme();
  return {
    fontSize: "14px",
    fontWeight: 700,
    fontFamily: "sans-serif",
    color: theme.colors.secondaryDark,
    textTransform: "uppercase",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "14px",
    },
  };
});

export default Text;

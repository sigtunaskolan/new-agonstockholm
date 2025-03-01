import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Paragraph = styled("p")(() => {
  const theme = useTheme();
  return {
    fontSize: "20px",
    fontFamily: "sans-serif",
    maxWidth: "820px",
    marginLeft: "12px",
    color: theme.colors.gray,
    textAlign: "center",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "15px",
      textAlign: "center",
      maxWidth: "35ch",
    },
  };
});

export default Paragraph;

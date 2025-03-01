import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Paragraph = styled("p")(() => {
  const theme = useTheme();
  return {
    fontSize: "1.5rem",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    maxWidth: "820px",
    marginBottom: "2.5rem",
    marginTop: "0.5rem",
    paddingLeft: "2px", // Add slight padding to align with headline
    fontWeight: 300,
    color: theme.colors.white,
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "1.2rem",
      textAlign: "center",
      maxWidth: "35ch",
      paddingLeft: 0,
    },
  };
});

export default Paragraph;

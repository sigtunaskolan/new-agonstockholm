import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Paragraph = styled("p")(() => {
  const theme = useTheme();
  return {
    fontSize: "20px",
    maxWidth: "420px",
    marginLeft: "12px",
    color: theme.colors.gray,
    position: "relative",
    zIndex: 10,
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "15px",
      textAlign: "center",
    },
  };
});

export default Paragraph;

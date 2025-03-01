import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { TokenVariant } from "@/contextsConfig/content/contentType";

const Text = styled("span")((prop) => {
  const theme = useTheme();
  return {
    marginRight: 0,
    fontSize: "6rem",
    fontWeight: 700,
    lineHeight: 1,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    display: "inline-block",
    color:
      prop.color === TokenVariant.DEFAULT
        ? theme.colors.white
        : theme.colors.secondary,
    whiteSpace: "nowrap",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      marginRight: 8,
      fontSize: "3.5rem",
      whiteSpace: "normal",
    },
  };
});

export default Text;

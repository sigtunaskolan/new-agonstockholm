import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { TokenVariant } from "@/contextsConfig/content/contentType";

const Text = styled("span")((prop) => {
  const theme = useTheme();
  return {
    marginRight: 16,
    fontSize: "80px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color:
      prop.color === TokenVariant.DEFAULT
        ? theme.colors.white
        : theme.colors.primary,
    whiteSpace: "nowrap",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      marginRight: 8,
      fontSize: "30px",
      whiteSpace: "normal",
    },
  };
});

export default Text;

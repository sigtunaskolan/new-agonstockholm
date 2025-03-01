import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const HideOnMobile = styled("div")(() => {
  const theme = useTheme();
  return {
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      display: "none",
    },
  };
});

export default HideOnMobile;

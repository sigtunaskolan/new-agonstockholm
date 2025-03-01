import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled("div")(() => {
  const theme = useTheme();
  return {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: "60px",
    paddingLeft: "26px",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      justifyContent: "center",
      paddingLeft: "0px",
    },
  };
});

export default Container;

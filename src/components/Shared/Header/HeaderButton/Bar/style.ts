import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Bar = styled("div")(() => {
  const theme = useTheme();
  return {
    width: "25px",
    height: "3px",
    background: theme.colors.secondaryDark,
    marginTop: "2px",
    marginBottom: "2px",
  };
});

export default Bar;

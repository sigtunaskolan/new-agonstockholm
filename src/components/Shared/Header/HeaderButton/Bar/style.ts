import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Bar = styled("div")(() => {
  const theme = useTheme();
  return {
    width: "22px",
    height: "2.5px",
    background: theme.colors.secondary,
    marginTop: "3px",
    marginBottom: "3px",
    borderRadius: "1px",
    transition: "all 0.3s ease",
  };
});

export default Bar;

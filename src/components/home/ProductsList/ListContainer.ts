import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const ListContainer = styled("div")(() => {
  const theme = useTheme();
  return {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem",
    width: "100%",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      gridTemplateColumns: "1fr",
    },
  };
});

export default ListContainer;

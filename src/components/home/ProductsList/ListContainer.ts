import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const ListContainer = styled("div")(() => {
  const theme = useTheme();
  return {
    display: "flex",
    width: "90vw",
    height: "350px",
    backgroundColor: "white",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      flexDirection: "column",
      height: "1000px",
    },
  };
});

export default ListContainer;

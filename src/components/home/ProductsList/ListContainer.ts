import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const ListContainer = styled("div")(() => {
  const theme = useTheme();
  return {
    display: "flex",
    width: "90vw",
    maxWidth: "1400px",
    height: "450px",
    backgroundColor: "white",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-30px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "4px",
      background: `linear-gradient(to right, transparent, ${theme.colors.primary}50, transparent)`,
      borderRadius: "2px",
    },
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      width: "95vw",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      flexDirection: "column",
      height: "auto",
      minHeight: "1000px",
    },
  };
});

export default ListContainer;

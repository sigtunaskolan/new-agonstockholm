import styled from "@emotion/styled";

const Container = styled("div")(({ theme }) => {
  return {
    width: "85vw",
    maxWidth: "1400px",
    margin: "0 auto",
    paddingTop: "100px",
    paddingBottom: "100px",
    position: "relative",
    boxShadow: "0 5px 30px rgba(0, 0, 0, 0.05)",
    background: theme.colors.white,
    borderRadius: "4px",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "8px",
      background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
    },
    [`@media (max-width: ${theme.breakPoint.desktop})`]: {
      width: "90vw",
    },
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      width: "95vw",
      paddingTop: "80px",
      paddingBottom: "80px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      width: "100%",
      paddingTop: "60px",
      paddingBottom: "60px",
      paddingLeft: "20px",
      paddingRight: "20px",
      borderRadius: 0,
    },
  };
});

export default Container;

import styled from "@emotion/styled";

const Container = styled("div")(({ theme }) => {
  return {
    width: "65vw",
    maxWidth: "1200px",
    paddingTop: "100px",
    paddingBottom: "60px",
    [`@media (max-width: ${theme.breakPoint.desktop})`]: {
      width: "85vw",
    },
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      width: "90vw",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      width: "100vw",
      paddingTop: "40px",
      paddingBottom: "40px",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  };
});

export default Container;

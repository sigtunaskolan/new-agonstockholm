import React from "react";

import styled from "@emotion/styled";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  backgroundColor?: string;
};

const Container = styled.div<Props>(({ theme, backgroundColor }) => {
  return {
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "200px",
    paddingRight: "140px",
    display: "flex",
    width: "100%",
    minHeight: "200px",
    overflow: "hidden",
    backgroundColor: backgroundColor || theme.colors.white,
    flexDirection: "column",
    justifyContent: "center",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "20px",
      paddingBottom: "20px",
      minHeight: "150px",
    },
  };
});

export default Container;

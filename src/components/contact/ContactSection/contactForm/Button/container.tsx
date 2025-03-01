import React from "react";

import styled from "@emotion/styled";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  backgroundColor?: string;
};

const Container = styled.div<Props>(({ theme, backgroundColor }) => {
  return {
    padding: "16px 24px",
    borderRadius: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "200px",
    backgroundColor: backgroundColor || theme.colors.secondaryDark,
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      minWidth: "195px",
    },
  };
});

export default Container;

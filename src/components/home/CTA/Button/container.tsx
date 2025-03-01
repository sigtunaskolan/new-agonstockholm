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
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: backgroundColor || theme.colors.primary,
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      minWidth: "195px",
    },
  };
});

export default Container;

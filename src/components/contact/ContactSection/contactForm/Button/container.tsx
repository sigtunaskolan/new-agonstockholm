import React from "react";
import styled from "@emotion/styled";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundColor?: string;
  disabled?: boolean;
};

const Container = styled.button<Props>(({ theme, backgroundColor, disabled }) => {
  return {
    padding: "16px 24px",
    borderRadius: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    width: "200px",
    backgroundColor: backgroundColor || theme.colors.secondaryDark,
    opacity: disabled ? 0.7 : 1,
    transition: "opacity 0.3s ease",
    border: "none",
    outline: "none",
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      minWidth: "195px",
    },
    "&:hover": {
      opacity: disabled ? 0.7 : 0.9,
    },
  };
});

export default Container;

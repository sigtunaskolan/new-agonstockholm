import React from "react";
import styled from "@emotion/styled";

type TextVariant = "header" | "lable" | "value";

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  textVariant?: TextVariant;
};

const Text = styled.span<TextProps>(({ theme, textVariant }) => {
  if (textVariant === "value") {
    return {
      fontSize: "18px",
      fontWeight: 400,
      color: theme.colors.secondaryDark,
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "16px",
      },
    };
  }
  if (textVariant === "lable") {
    return {
      fontSize: "30px",
      fontWeight: 400,
      color: theme.colors.secondaryDark,
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "25px",
      },
    };
  }

  return {
    fontSize: "65px",
    fontWeight: 600,
    color: theme.colors.secondaryDark,
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "45px",
    },
  };
});

export default Text;

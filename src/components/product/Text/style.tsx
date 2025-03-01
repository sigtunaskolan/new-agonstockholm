import React from "react";
import styled from "@emotion/styled";

type TextVariant = "title" | "paragraph";

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  textVariant?: TextVariant;
  color?: string;
};

const Text = styled.span<TextProps>(({ theme, textVariant, color }) => {
  if (textVariant === "title") {
    return {
      fontSize: "35px",
      fontWeight: 700,
      fontFamily: "Helvetica",
      color: color || theme.colors.black,
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "30px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "30px",
      },
    };
  }

  return {
    fontSize: "20px",
    fontWeight: 200,
    color: color || "#000",
    fontFamily: "Helvetica",
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      fontSize: "18px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "16px",
    },
  };
});

export default Text;

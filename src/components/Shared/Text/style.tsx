import React from "react";
import styled from "@emotion/styled";

type TextVariant =
  | "title"
  | "subtitle"
  | "paraghraph"
  | "statValue"
  | "statLabel";

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  textVariant?: TextVariant;
};

const Text = styled.span<TextProps>(({ theme, textVariant }) => {
  if (textVariant === "title") {
    return {
      fontSize: "60px",
      fontWeight: 700,
      fontFamily: "Helvetica",
      color: theme.colors.black,
      textAlign: "center",
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: theme.colors.secondary,
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "50px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "40px",
      },
    };
  }

  if (textVariant === "subtitle") {
    return {
      fontSize: "50px",
      fontWeight: 600,
      color: theme.colors.black,
      fontFamily: "Helvetica",
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "45px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "30px",
      },
    };
  }

  if (textVariant === "statValue") {
    return {
      fontSize: "24px",
      fontWeight: 700,
      color: theme.colors.black,
      fontFamily: "Helvetica",
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "22px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "20px",
      },
    };
  }

  if (textVariant === "statLabel") {
    return {
      fontSize: "16px",
      fontWeight: 400,
      color: theme.colors.lightBlack,
      fontFamily: "Helvetica",
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "14px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "14px",
      },
    };
  }

  return {
    fontSize: "20px",
    fontWeight: 400,
    color: theme.colors.lightBlack,
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

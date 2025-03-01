import React, { ReactNode } from "react";
import styled from "@emotion/styled";

enum TextVariant {
  HEADER = "header",
  TEXT_BUTTON = "textButton",
  ITEM_MENU_TITLE = "ItemMenuTitle",
  ITEM_MENU_SUBTITLE = "ItemMenuSubtitle",
  FOOTER_LABEL = "footerLabel",
  FOOTER_VALUE = "footerValue",
}

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  variant?: TextVariant;
};

const Text = styled.span<Props>(({ theme, color, variant }) => {
  if (variant === "textButton") {
    return {
      fontSize: "18px",
      fontFamily: "sans-serif",
      fontWeight: 400,
      color: color || theme.colors.secondary,
      cursor: "pointer",
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "16px",
      },
    };
  }

  if (variant === "ItemMenuTitle") {
    return {
      fontSize: "40px",
      fontFamily: "sans-serif",
      fontWeight: 400,
      color: color || theme.colors.secondary,
      cursor: "pointer",
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "30px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "20px",
      },
    };
  }

  if (variant === "ItemMenuSubtitle") {
    return {
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontWeight: 400,
      color: color || theme.colors.grayDark,
      cursor: "pointer",
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "14px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "12px",
      },
    };
  }

  if (variant === "footerLabel") {
    return {
      fontSize: "20px",
      fontFamily: "sans-serif",
      fontWeight: 400,
      color: color || theme.colors.grayDark,
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "18px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "16px",
      },
    };
  }

  if (variant === "footerValue") {
    return {
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontWeight: 400,
      color: color || theme.colors.secondary,
      [`@media (max-width: ${theme.breakPoint.tablet})`]: {
        fontSize: "14px",
      },
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "12px",
      },
    };
  }

  return {
    fontSize: "28px",
    fontFamily: "sans-serif",
    fontWeight: 700,
    color: color || theme.colors.secondary,
    [`@media (max-width: ${theme.breakPoint.tablet})`]: {
      fontSize: "24px",
    },
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "20px",
    },
  };
});

export { TextVariant };
export default Text;

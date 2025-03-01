import styled from "@emotion/styled";

type TextVariant = "title" | "subtitle" | "label" | "abvLabel";

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  textVariant?: TextVariant;
};

const Text = styled.span<TextProps>(({ theme, textVariant }) => {
  if (textVariant === "title") {
    return {
      fontSize: "60px",
      fontWeight: 700,
      fontFamily: "Helvetica",
      color: theme.colors.secondaryDark,
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "30px",
      },
    };
  }
  if (textVariant === "subtitle") {
    return {
      fontSize: "18px",
      fontWeight: 700,
      fontFamily: "Helvetica",
      color: theme.colors.grayDark,
      maxWidth: "450px",
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "15px",
      },
    };
  }
  if (textVariant === "abvLabel") {
    return {
      fontSize: "18px",
      fontWeight: 700,
      fontFamily: "sans-serif",
      color: theme.colors.white,
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "20px",
        opacity: 1,
      },
    };
  }

  return {
    fontSize: "18px",
    fontWeight: 700,
    fontFamily: "sans-serif",
    color: theme.colors.white,
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "14px",
      opacity: 1,
    },
  };
});

export default Text;

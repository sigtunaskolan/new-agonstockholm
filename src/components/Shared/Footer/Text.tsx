import styled from "@emotion/styled";

type TextVariant = "title" | "subtitle" | "label";

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
  textVariant?: TextVariant;
};

const Text = styled.span<TextProps>(({ theme, textVariant }) => {
  if (textVariant === "title") {
    return {
      fontSize: "40px",
      fontWeight: 700,
      fontFamily: "Helvetica",
      color: theme.colors.white,
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "30px",
      },
    };
  }
  if (textVariant === "subtitle") {
    return {
      fontSize: "25px",
      fontWeight: 700,
      fontFamily: "Helvetica",
      color: theme.colors.white,
      maxWidth: "450px",
      [`@media (max-width: ${theme.breakPoint.mobile})`]: {
        fontSize: "20px",
      },
    };
  }

  return {
    fontSize: "18px",
    fontWeight: 400,
    fontFamily: "sans-serif",
    color: theme.colors.white,
    [`@media (max-width: ${theme.breakPoint.mobile})`]: {
      fontSize: "14px",
      opacity: 1,
    },
  };
});

export default Text;

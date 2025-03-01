import styled from "@emotion/styled";

type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: string;
};

const Text = styled.span<TextProps>((prop) => {
  return {
    fontSize: "32px",
    fontWeight: "800",
    fontFamily: "'Inter', sans-serif",
    color: prop.color,
    whiteSpace: "nowrap",
    letterSpacing: "-0.5px",
    transition: "color 0.3s ease",
  };
});

export default Text;

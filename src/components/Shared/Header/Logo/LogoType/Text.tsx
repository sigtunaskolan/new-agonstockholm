import styled from "@emotion/styled";

type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: string;
};

const Text = styled.span<TextProps>((prop) => {
  return {
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: prop.color,
    whiteSpace: "nowrap",
  };
});

export default Text;

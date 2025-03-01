import * as React from "react";
import Container from "./container";
import Text from "./Text";

type Props = {
  backgroundColor?: string;
  text: string;
  onClick?: () => void;
};

function Button({ backgroundColor = "", text = "", onClick }: Props) {
  return (
    <Container backgroundColor={backgroundColor} onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;

import * as React from "react";
import Container from "./container";
import Text from "./Text";

type Props = {
  backgroundColor?: string;
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

function Button({ 
  backgroundColor = "", 
  text = "", 
  onClick, 
  type = "button", 
  disabled = false 
}: Props) {
  return (
    <Container 
      backgroundColor={backgroundColor} 
      onClick={onClick} 
      type={type}
      disabled={disabled}
    >
      <Text>{text}</Text>
    </Container>
  );
}

export default Button;

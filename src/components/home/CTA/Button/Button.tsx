import * as React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Container from "./container";
import Text from "./Text";

type Props = {
  backgroundColor?: string;
  text: string;
  onClick?: () => void;
  withIcon?: boolean;
};

function Button({
  backgroundColor = "",
  text = "",
  withIcon = false,
  onClick,
}: Props) {
  return (
    <Container backgroundColor={backgroundColor} onClick={onClick}>
      <Text>{text}</Text>
      {withIcon && (
        <ArrowDownwardIcon
          sx={{
            color: "#494976",
            marginLeft: "10px",
          }}
        />
      )}
    </Container>
  );
}

export default Button;

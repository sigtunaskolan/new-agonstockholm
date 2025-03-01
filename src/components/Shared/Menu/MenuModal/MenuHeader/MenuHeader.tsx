import React from "react";
import { useTheme } from "@emotion/react";
import Container from "./container";
import Text from "../shared/Text";
import ActionButtons from "./ActionButtons";

type Props = {
  onClose: () => void;
};

export default function MenuHeader({ onClose }: Props) {
  const theme = useTheme();

  const textData = [
    { text: "Ag", color: theme.colors.secondary },
    { text: "on", color: theme.colors.grayDark },
  ];

  return (
    <Container>
      {textData.map((item, index) => (
        <Text key={index} fontSize="28px" fontWeight={700} color={item.color}>
          {item.text}
        </Text>
      ))}
      <ActionButtons onClose={onClose} />
    </Container>
  );
}

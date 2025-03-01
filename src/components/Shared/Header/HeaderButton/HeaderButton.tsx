import * as React from "react";
import Container from "./container";
import Bar from "./Bar";
import initialTheme from "@/contextsConfig/theme/initialValue";

type Props = {
  onClick: () => void;
};

export default function HeaderButton({ onClick }: Props) {
  return (
    <Container theme={initialTheme} onClick={onClick}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <Bar key={index} />
        ))}
    </Container>
  );
}

import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type Props = {
  renderTopElement: () => ReactNode;
  renderBottomElement: () => ReactNode;
};

export default function Container({
  renderTopElement,
  renderBottomElement,
}: Props) {
  return (
    <div>
      <Box mb={1.5}>{renderTopElement()}</Box>
      <Box>{renderBottomElement()}</Box>
    </div>
  );
}

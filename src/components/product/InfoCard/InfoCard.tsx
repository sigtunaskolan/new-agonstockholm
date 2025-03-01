import * as React from "react";
import { Box } from "@mui/material";
import Container from "./container";
import Text from "../Text";

type Props = {
  title?: string;
  headline?: string;
  backgroundColor?: string;
  textColor?: string;
  healineMaxHeight?: string;
};

export default function InfoCard({
  title,
  headline,
  backgroundColor,
  textColor,
  healineMaxHeight,
}: Props) {
  return (
    <Container backgroundColor={backgroundColor}>
      {title && (
        <Box mb="16px">
          <Text textVariant="title" color={textColor}>
            {title}
          </Text>
        </Box>
      )}
      {headline && (
        <Box
          sx={{
            maxHeight: {
              xs: healineMaxHeight || "25vh",
              md: "20vh",
            },
            overflow: "auto",
          }}
        >
          <Text textVariant="paragraph" color={textColor}>
            {headline}
          </Text>
        </Box>
      )}
    </Container>
  );
}

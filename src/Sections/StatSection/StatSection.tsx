import React from "react";
import Container from "./container";
import Box from "@mui/material/Box";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { StatSectionProps } from "./types";

type Props = Omit<StatSectionProps, "sectionType">;

export default function StatSection({
  title,
  description,
  stat,
  image,
}: Props) {
  return (
    <Container id="form">
      <Box
        display="flex"
        width="100%"
        sx={{
          maxWidth: "1250px",
        }}
        flexDirection={{
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        }}
      >
        <LeftSection title={title} description={description} stat={stat} />
        <RightSection image={image} />
      </Box>
    </Container>
  );
}

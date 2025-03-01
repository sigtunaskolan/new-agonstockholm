import React from "react";
import Box from "@mui/material/Box";
import Text from "../../components/Shared/Text";
import StatList from "./StatList";
import { StatSectionProps } from "./types";

type ComponentProps = Omit<StatSectionProps, "sectionType" | "image">;

export default function LeftSection({
  title,
  description,
  stat,
}: ComponentProps) {
  const descList = description?.split(";");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box mb={4}>
        <Box mb={2}>
          <Text textVariant="subtitle">{title}</Text>
        </Box>
        {descList?.map((desc, index) => (
          <Box mb={2} key={index}>
            <Text textVariant="paraghraph">{desc}</Text>
          </Box>
        ))}
      </Box>
      <StatList stat={stat} />
    </Box>
  );
}

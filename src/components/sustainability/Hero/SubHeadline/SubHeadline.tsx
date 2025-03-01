"use client";
import React, { useContext } from "react";
import Container from "./container";
import Paragraph from "./Paragraph";
import ContentContext from "@/contextsConfig/content/ContentContext";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useTheme } from "@emotion/react";

export default function SubHeadline() {
  const theme = useTheme();
  const content = useContext(ContentContext);
  return (
    <Container>
      <ElectricBoltIcon
        sx={{
          fontSize: { xs: "25px", sm: "30px", md: "50px" },
          color: theme.colors.primary,
          transform: {
            xs: "translate(10px, -20px)",
            md: "translate(15px, -40px)",
          },
        }}
      />
      <Paragraph>{content.subHeadline}</Paragraph>
    </Container>
  );
}

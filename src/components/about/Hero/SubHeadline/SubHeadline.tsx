"use client";
import React, { useContext } from "react";
import Container from "./container";
import Paragraph from "./Paragraph";
import ContentContext from "@/contextsConfig/content/ContentContext";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useTheme } from "@emotion/react";
import RichText from "@/components/Shared/RichText";
import { Box } from "@mui/material";

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
      
      {/* Use richTextContent if available, otherwise fall back to plain text */}
      {content.richTextContent ? (
        <Box sx={{ 
          fontSize: { xs: "16px", sm: "18px", md: "22px" },
          lineHeight: { xs: "24px", sm: "26px", md: "32px" },
          fontWeight: 300,
          color: theme.colors.textSecondary,
        }}>
          <RichText content={content.richTextContent} />
        </Box>
      ) : (
        <Paragraph>{content.subHeadline}</Paragraph>
      )}
    </Container>
  );
}

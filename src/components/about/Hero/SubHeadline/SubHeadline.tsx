"use client";
import React, { useContext } from "react";
import Container from "./container";
import Paragraph from "./Paragraph";
import ContentContext from "@/contextsConfig/content/ContentContext";
import { useTheme } from "@emotion/react";
import RichText from "@/components/Shared/RichText";
import { Box } from "@mui/material";
import * as S from '@/components/LandingPage/container';

export default function SubHeadline() {
  const theme = useTheme();
  const content = useContext(ContentContext);
  
  // Match the landing page styling
  if (!content.subHeadline && !content.richTextContent) {
    return (
      <S.Subtitle>
        Agon Stockholm is leading the way in sustainable recycling and circular economy solutions for businesses across Europe.
      </S.Subtitle>
    );
  }
  
  // Use richTextContent if available, otherwise fall back to plain text
  if (content.richTextContent) {
    return (
      <Box sx={{ 
        fontSize: { xs: "16px", sm: "18px", md: "22px" },
        lineHeight: { xs: "24px", sm: "26px", md: "32px" },
        fontWeight: 300,
        color: "white",
        maxWidth: "800px",
      }}>
        <RichText content={content.richTextContent} />
      </Box>
    );
  }
  
  return (
    <S.Subtitle>{content.subHeadline}</S.Subtitle>
  );
}

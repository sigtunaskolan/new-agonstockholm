import React from "react";
import { Box, Stack, Tooltip } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import Text from "../Text";
import SocialMedia from "./SocialMedia";

function LeftSection() {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems={{ xs: "center", md: "flex-start" }}
      gap={4}
    >
      <Text textVariant="title">
        Ag<span style={{ color: theme.colors.primary }}>on</span>
      </Text>
      
      <Box>
        <SocialMedia />
      </Box>
      
      <Tooltip title="BIR Certified Recycling" placement="top">
        <Box sx={{ 
          mt: 2, 
          display: "flex", 
          alignItems: "center",
          background: "rgba(255,255,255,0.1)",
          padding: "8px 16px",
          borderRadius: "6px"
        }}>
          <Image 
            src="/bir.png" 
            width={100} 
            height={40} 
            alt="BIR Certification" 
            style={{ objectFit: "contain" }} 
          />
        </Box>
      </Tooltip>
    </Box>
  );
}

export default LeftSection;

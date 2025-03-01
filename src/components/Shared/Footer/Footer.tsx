import React from "react";
import Container from "./container";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { Box, Divider } from "@mui/material";
import Copyright from "./Copyright";
import { useTheme } from "@emotion/react";

function Footer() {
  const theme = useTheme();
  
  return (
    <Container>
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={{ xs: 4, md: 0 }}
      >
        <LeftSection />
        <RightSection />
      </Box>
      
      <Divider 
        sx={{ 
          my: 4, 
          borderColor: 'rgba(255, 255, 255, 0.12)',
          width: '100%'
        }} 
      />
      
      <Copyright />
    </Container>
  );
}

export default Footer;

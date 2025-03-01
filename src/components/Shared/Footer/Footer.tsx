import React from "react";
import Container from "./container";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Container>
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <LeftSection />
        <RightSection />
      </Box>
    </Container>
  );
}

export default Footer;

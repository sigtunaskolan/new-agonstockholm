import React from "react";
import { Box } from "@mui/material";
import LinksList from "./LinksList";
import ContactInfo from "./ContactInfo";

function RightSection() {
  return (
    <Box display="flex" flexDirection="row">
      <LinksList />
      <Box ml="40px">
        <ContactInfo />
      </Box>
    </Box>
  );
}

export default RightSection;

import React from "react";
import { Box, Grid } from "@mui/material";
import LinksList from "./LinksList";
import ContactInfo from "./ContactInfo";
import { useTheme } from "@emotion/react";

function RightSection() {
  const theme = useTheme();
  
  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: "column", sm: "row" }}
      gap={{ xs: 4, sm: 6, md: 8 }}
      alignItems={{ xs: "center", sm: "flex-start" }}
      sx={{
        [`@media (max-width: ${theme.breakPoint.mobile})`]: {
          width: "100%",
          justifyContent: "center",
        },
      }}
    >
      <LinksList />
      <ContactInfo />
    </Box>
  );
}

export default RightSection;

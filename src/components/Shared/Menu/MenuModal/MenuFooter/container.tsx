import React from "react";
import Box from "@mui/material/Box";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import HideOnMobile from "@/components/Shared/HideOnMobile";

export default function container() {
  return (
    <Box display="flex" justifyContent="space-between">
      <LeftSection />
      <HideOnMobile>
        <RightSection />
      </HideOnMobile>
    </Box>
  );
}

import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import Text from "../Text";

function LeftSection() {
  const theme = useTheme();
  return (
    <Box
      minHeight="150px"
      maxWidth="130px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text textVariant="title">
        Ag<span style={{ color: theme.colors.primary }}>on</span>
      </Text>
      <Image src="/bir.png" width="80" height="30" alt="logo" />
    </Box>
  );
}

export default LeftSection;

import React from "react";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import Text from "../Text";

function ContactInfo() {
  const t = useTranslations("Menu");
  return (
    <Box
      minHeight="150px"
      maxWidth="200px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Box display="flex" justifyContent="flex-start" mb={1}>
        <Text textVariant="subtitle">{t("REACH_OUT")}</Text>
      </Box>

      <Box display="flex" justifyContent="flex-start" mb={1}>
        <Text textVariant="label">Norrlandsgatan 10, 111 43, Stockholm SE</Text>
      </Box>

      <Box display="flex" justifyContent="flex-start" mb={1}>
        <Text textVariant="label">info@agonskot.se</Text>
      </Box>

      <Box display="flex" justifyContent="flex-start">
        <Text textVariant="label">073-835 66 99</Text>
      </Box>
    </Box>
  );
}

export default ContactInfo;

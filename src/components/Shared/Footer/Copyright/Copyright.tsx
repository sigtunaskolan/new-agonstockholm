import React from "react";
import { Box } from "@mui/material";
import Text from "../Text";
import { useTranslations } from "next-intl";

function Copyright() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <Text textVariant="small">
        © {currentYear} Agon Stockholm. {t("RIGHTS")}
      </Text>
      
      <Text textVariant="small">
        <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>
          {t("PRIVACY")}
        </a>
        {" | "}
        <a href="/terms" style={{ color: 'inherit', textDecoration: 'underline' }}>
          {t("TERMS")}
        </a>
      </Text>
    </Box>
  );
}

export default Copyright;
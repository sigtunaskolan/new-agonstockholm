import React from "react";
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";
import Container from "./container";
import Text from "../Text";

export default function Header() {
  const t = useTranslations("Home");
  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"}>
        <Text textVariant="title">{t("OUR_PRODUCTS")}</Text>
        <Box mt={1} mb={4}>
          <Text textVariant="subtitle">{t("PRODUCTS_HEADLINE")}</Text>
        </Box>
      </Box>
    </Container>
  );
}

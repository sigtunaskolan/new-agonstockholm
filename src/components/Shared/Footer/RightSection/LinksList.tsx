import React from "react";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Text from "../Text";

function LinksList() {
  const t = useTranslations("Menu");
  return (
    <Box
      minHeight="150px"
      maxWidth="130px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      mt="4px"
    >
      <Link href={"/home"}>
        <Box
          display="flex"
          minWidth="100px"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Text textVariant="label">{t("HOME")}</Text>
        </Box>
      </Link>
      <Link href={"/about"}>
        <Box
          display="flex"
          minWidth="100px"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Text textVariant="label">{t("ABOUT")}</Text>
        </Box>
      </Link>
      <Link href={"/sustainability"}>
        <Box
          display="flex"
          minWidth="100px"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Text textVariant="label">{t("SUSTAINABILITY")}</Text>
        </Box>
      </Link>
      <Link href={"/contact"}>
        <Box
          display="flex"
          minWidth="100px"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Text textVariant="label">{t("CONTACT")}</Text>
        </Box>
      </Link>
    </Box>
  );
}

export default LinksList;

import React from "react";
import { Box, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Text from "../Text";
import { useTheme } from "@emotion/react";

function LinksList() {
  const t = useTranslations("Menu");
  const theme = useTheme();
  
  const linkItems = [
    { key: "home", label: t("HOME"), href: "/home" },
    { key: "about", label: t("ABOUT"), href: "/about" },
    { key: "sustainability", label: t("SUSTAINABILITY"), href: "/sustainability" },
    { key: "contact", label: t("CONTACT"), href: "/contact" },
  ];
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={{ xs: "center", sm: "flex-start" }}
    >
      <Text 
        textVariant="subtitle" 
        style={{ 
          marginBottom: "20px", 
          fontSize: "20px",
          position: "relative"
        }}
      >
        {t("NAVIGATION")}
        <Box 
          sx={{ 
            position: "absolute", 
            left: 0, 
            bottom: "-6px", 
            width: "40px", 
            height: "3px", 
            backgroundColor: theme.colors.primary 
          }} 
        />
      </Text>
      
      <Stack 
        spacing={2}
        alignItems={{ xs: "center", sm: "flex-start" }}
      >
        {linkItems.map((item) => (
          <Link key={item.key} href={item.href} style={{ textDecoration: "none" }}>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                position: "relative",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <Box 
                component="span" 
                sx={{ 
                  width: "6px", 
                  height: "6px", 
                  borderRadius: "50%", 
                  backgroundColor: theme.colors.primary,
                  marginRight: "10px",
                  display: "inline-block"
                }} 
              />
              <Text textVariant="label">{item.label}</Text>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default LinksList;

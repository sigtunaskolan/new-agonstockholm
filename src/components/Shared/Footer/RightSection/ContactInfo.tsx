import React from "react";
import { Box, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import Text from "../Text";
import { useTheme } from "@emotion/react";

// SVG Icons as React components
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9 2.5 2.5 0 0 1 12 6.5 2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

function ContactInfo() {
  const t = useTranslations("Menu");
  const theme = useTheme();
  
  const contactItems = [
    { 
      icon: <LocationIcon />, 
      text: "Norrlandsgatan 10, 111 43, Stockholm SE",
      href: "https://maps.google.com/?q=Norrlandsgatan 10, 111 43, Stockholm SE"
    },
    { 
      icon: <EmailIcon />, 
      text: "info@agonmetals.com",
      href: "mailto:info@agonmetals.com"
    },
    { 
      icon: <PhoneIcon />, 
      text: "+46 73-835 66 99",
      href: "tel:+46738356699"
    },
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
        {t("REACH_OUT")}
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
      
      <Stack spacing={2} alignItems={{ xs: "center", sm: "flex-start" }}>
        {contactItems.map((item, index) => (
          <Box 
            key={index}
            component="a"
            href={item.href}
            target={item.href.startsWith("https") ? "_blank" : "_self"}
            rel={item.href.startsWith("https") ? "noopener noreferrer" : ""}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: theme.colors.white,
              transition: "color 0.2s ease",
              "&:hover": {
                color: theme.colors.primary,
              },
            }}
          >
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center",
                color: theme.colors.primary 
              }}
            >
              {item.icon}
            </Box>
            <Text textVariant="label">{item.text}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ContactInfo;

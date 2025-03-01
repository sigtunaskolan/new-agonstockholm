import React from "react";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Text, { TextVariant } from "../../../shared/Text";
import { useTheme } from "@emotion/react";

export default function Container() {
  const theme = useTheme();
  const contactInfo = [
    { IconComponent: PhoneIcon, text: "073-835 66 99" },
    { IconComponent: EmailIcon, text: "info@agonskot.se" },
  ];

  return (
    <Box display="flex" alignItems="center">
      {contactInfo.map(({ IconComponent, text }, index) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          key={index}
          mr={index !== contactInfo.length - 1 ? 3 : 0}
        >
          <Box mr={1.5} display="flex" justifyContent={"end"}>
            <IconComponent
              fontSize="small"
              sx={{ color: theme.colors.secondary }}
            />
          </Box>
          <Text variant={TextVariant.FOOTER_VALUE}>{text}</Text>
        </Box>
      ))}
    </Box>
  );
}

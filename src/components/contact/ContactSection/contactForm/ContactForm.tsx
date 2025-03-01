import React, { useState } from "react";
import Container from "./container";
import { Box, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import Text from "./Text";
import Separator from "@/components/Shared/Separator";
import LottieAnimation from "@/components/Shared/LottieAnimation";
import Button from "./Button";
import animationData from "../../../../assets/success.json";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const t = useTranslations("Contact");
  const fields = [
    { placeholder: t("FULL_NAME"), id: "full-name" },
    { placeholder: t("EMAIL"), id: "email" },
    { placeholder: t("MESSAGE"), id: "message" },
  ];

  const renderLeftSide = () => (
    <Box display="flex" flexDirection="column" maxWidth={300}>
      {fields.map((field) => (
        <Box key={field.id} mb={3}>
          <TextField
            style={{
              transform: "translateY(-6px)",
              width: "250px",
            }}
            focused
            id={field.id}
            variant="standard"
            placeholder={field.placeholder}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: "18px",
              },
            }}
          />
          <Separator />
        </Box>
      ))}
      <Box mt={3}>
        <Button
          onClick={() => {
            setSuccess(true);
          }}
          text="Contact us"
        />
      </Box>
    </Box>
  );

  const renderRightSide = () => (
    <Box display="flex" flexDirection="column" maxWidth={300}>
      <Box mb={3}>
        <Box mb={1}>
          <Text textVariant="lable">{t("CONTACT")}</Text>
        </Box>
        <Box mb={1}>
          <Text textVariant="value">info@agonskot.se</Text>
        </Box>
        <Text textVariant="value">073-835 66 99</Text>
      </Box>
      <Box mb={3}>
        <Box mb={1}>
          <Text textVariant="lable">{t("BASED_IN")}</Text>
        </Box>
        <Text textVariant="value">Norrlandsgatan 10 111 43 Stockholm</Text>
      </Box>
    </Box>
  );

  const renderSuccess = () => (
    <LottieAnimation
      animationData={animationData}
      style={{ width: "150px", height: "200px" }}
    />
  );

  return (
    <Box width="100%">
      <Text>{t("CONTACT")}</Text>
      <Container>
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <Box>{!success ? renderLeftSide() : renderSuccess()}</Box>
          <Box
            ml={{
              lg: 8,
              md: 8,
              sm: 8,
              xs: 0,
            }}
            mt={{
              lg: 0,
              md: 0,
              sm: 0,
              xs: 8,
            }}
          >
            {renderRightSide()}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

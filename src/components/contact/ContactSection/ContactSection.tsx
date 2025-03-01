import React from "react";
import Container from "./container";
import Box from "@mui/material/Box";
import ContactForm from "./contactForm";

export default function ContactSection() {
  return (
    <Container id="form">
      <Box
        display="flex"
        width="100%"
        flexDirection={{
          lg: "row",
          md: "column-reverse",
          sm: "column-reverse",
          xs: "column-reverse",
        }}
      >
        <Box
          ml={{
            lg: 8,
            md: 0,
            sm: 0,
            xs: 0,
          }}
          mb={{
            lg: 0,
            md: 6,
            sm: 6,
            xs: 6,
          }}
          display="flex"
          width="100%"
        >
          <ContactForm />
        </Box>
      </Box>
    </Container>
  );
}

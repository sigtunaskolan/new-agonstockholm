import React from "react";
import Container from "./container";
import Box from "@mui/material/Box";
import ContactForm from "./contactForm";
import * as S from '@/components/LandingPage/container';

export default function ContactSection() {
  return (
    <S.Section id="form">
      <S.SectionTitle>Get In Touch</S.SectionTitle>
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 0'
        }}
      >
        <ContactForm />
      </Box>
    </S.Section>
  );
}

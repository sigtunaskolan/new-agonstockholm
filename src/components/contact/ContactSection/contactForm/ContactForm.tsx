import React, { useState } from "react";
import Container from "./container";
import { Box, TextField, Alert } from "@mui/material";
import { useTranslations } from "next-intl";
import Text from "./Text";
import Separator from "@/components/Shared/Separator";
import LottieAnimation from "@/components/Shared/LottieAnimation";
import Button from "./Button";
import animationData from "../../../../assets/success.json";
import { useForm } from "@/utils/useForm";

// Define form state interface
interface ContactFormValues {
  fullName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const t = useTranslations("Contact");
  
  // Initialize form with validation rules
  const { 
    values, 
    errors, 
    touched, 
    isSubmitting,
    handleChange, 
    handleBlur, 
    handleSubmit 
  } = useForm<ContactFormValues>(
    // Initial values
    {
      fullName: '',
      email: '',
      message: '',
    },
    // Validation rules
    {
      fullName: [
        {
          pattern: /(.+)/,
          message: 'Name is required',
        },
      ],
      email: [
        {
          pattern: /(.+)/,
          message: 'Email is required',
        },
        {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Email is not valid',
        },
      ],
      message: [
        {
          pattern: /(.+)/,
          message: 'Message is required',
        },
      ],
    }
  );

  // Form submission handler
  const onSubmit = async (formValues: ContactFormValues) => {
    try {
      // Here you would normally send the form data to your API
      console.log('Form submitted with values:', formValues);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success state
      setSuccess(true);
      setFormError(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError(t('FORM_ERROR'));
    }
  };

  const renderLeftSide = () => (
    <Box display="flex" flexDirection="column" maxWidth={300}>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit, (errors) => {
          // Show the first error message if any
          const firstError = Object.values(errors)[0];
          if (firstError) setFormError(firstError);
        });
      }}>
        {/* Full Name Field */}
        <Box mb={3}>
          <TextField
            style={{
              transform: "translateY(-6px)",
              width: "250px",
            }}
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.fullName && !!errors.fullName}
            helperText={touched.fullName && errors.fullName}
            focused
            variant="standard"
            placeholder={t("FULL_NAME")}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: "18px",
              },
            }}
          />
          <Separator />
        </Box>
        
        {/* Email Field */}
        <Box mb={3}>
          <TextField
            style={{
              transform: "translateY(-6px)",
              width: "250px",
            }}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            focused
            variant="standard"
            placeholder={t("EMAIL")}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: "18px",
              },
            }}
          />
          <Separator />
        </Box>
        
        {/* Message Field */}
        <Box mb={3}>
          <TextField
            style={{
              transform: "translateY(-6px)",
              width: "250px",
            }}
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message && !!errors.message}
            helperText={touched.message && errors.message}
            multiline
            rows={3}
            focused
            variant="standard"
            placeholder={t("MESSAGE")}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: "18px",
              },
            }}
          />
          <Separator />
        </Box>
        
        {/* Form Error Display */}
        {formError && (
          <Box mb={2}>
            <Alert severity="error">{formError}</Alert>
          </Box>
        )}
        
        {/* Submit Button */}
        <Box mt={3}>
          <Button
            type="submit"
            disabled={isSubmitting}
            text={t("SUBMIT")}
          />
        </Box>
      </form>
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
    <Box display="flex" flexDirection="column" alignItems="center">
      <LottieAnimation
        animationData={animationData}
        style={{ width: "150px", height: "200px" }}
      />
      <Text textVariant="value">{t("SUCCESS_MESSAGE")}</Text>
    </Box>
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

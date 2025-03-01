import React from "react";
import { Box } from "@mui/material";
import Container from "./container";
import Header from "@/components/Shared/Header";
import { useTheme } from "@emotion/react";
import InfoCard from "../InfoCard";
import Button from "@/components/Shared/GoDownButton";

type Props = {
  name: string;
  headline: string;
  bgImg: string;
  description: string;
};

export default function Hero({ name, headline, bgImg, description }: Props) {
  const theme = useTheme();
  return (
    <Container bgImg={bgImg}>
      <Box
        pl={{
          xs: "20px",
          md: "80px",
          lg: "140px",
        }}
        pr={{
          xs: "20px",
          md: "80px",
          lg: "140px",
        }}
      >
        <Header mainColor={theme.colors.silverGray} />
      </Box>
      <Box
        pr={{
          xs: "50px",
          md: "30vw",
        }}
        pt="70px"
      >
        <InfoCard title={name} headline={headline} healineMaxHeight="20vh" />
      </Box>
      <Box
        pl={{
          xs: "50px",
          md: "30vw",
        }}
        pt="50px"
      >
        <InfoCard
          headline={description}
          backgroundColor={theme.colors.black}
          textColor={theme.colors.white}
          healineMaxHeight="30vh"
        />
      </Box>
      <Box
        height="50px"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        paddingBottom="35px"
        alignItems="center"
        flexGrow={1}
      >
        <Button href="#productList" />
      </Box>
    </Container>
  );
}

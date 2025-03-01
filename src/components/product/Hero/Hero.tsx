import React from "react";
import { Box, Fade } from "@mui/material";
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
  const [show, setShow] = React.useState(false);
  
  React.useEffect(() => {
    setShow(true);
  }, []);
  
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
        sx={{ marginBottom: { xs: "30px", md: "50px" } }}
      >
        <Header mainColor={theme.colors.silverGray} />
      </Box>
      
      <Fade in={show} timeout={800}>
        <Box
          pr={{
            xs: "20px",
            sm: "50px",
            md: "30vw",
          }}
          pt={{ xs: "40px", md: "70px" }}
          pl={{
            xs: "20px",
            sm: "50px",
          }}
        >
          <InfoCard title={name} headline={headline} healineMaxHeight="20vh" />
        </Box>
      </Fade>
      
      <Fade in={show} timeout={1200}>
        <Box
          pl={{
            xs: "20px",
            sm: "50px",
            md: "30vw",
          }}
          pr={{
            xs: "20px",
            sm: "50px",
          }}
          pt={{ xs: "30px", md: "50px" }}
        >
          <InfoCard
            headline={description}
            backgroundColor={theme.colors.black}
            textColor={theme.colors.white}
            healineMaxHeight="30vh"
          />
        </Box>
      </Fade>
      
      <Fade in={show} timeout={1600}>
        <Box
          height="50px"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          paddingBottom="35px"
          alignItems="center"
          flexGrow={1}
          sx={{
            marginTop: { xs: "30px", md: "auto" }
          }}
        >
          <Button href="#productList" />
        </Box>
      </Fade>
    </Container>
  );
}

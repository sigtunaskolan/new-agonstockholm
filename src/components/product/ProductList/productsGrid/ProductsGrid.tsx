import * as React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Fade, useTheme } from "@mui/material";

type Props = {
  imgesList: string[];
};

const ImageContainer = styled.div(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "320px",
  overflow: "hidden",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
    "& .image-overlay": {
      opacity: 0.3,
    },
    "& img": {
      transform: "scale(1.05)",
    },
  },
  [`@media (max-width: ${theme.breakPoint.mobile})`]: {
    height: "250px",
  },
}));

const ImageOverlay = styled.div(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to top, ${theme.colors.primary}80, transparent)`,
  zIndex: 1,
  opacity: 0,
  transition: "opacity 0.3s ease",
}));

export default function ProductGrid({ imgesList }: Props) {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    setVisible(true);
  }, []);
  
  return (
    <Box sx={{ 
      flexGrow: 1, 
      marginTop: "70px",
      maxWidth: "1400px",
      width: "100%",
      margin: "70px auto 0",
      padding: { xs: "0 20px", md: "0 40px" }
    }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {imgesList.map((imgSrc, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Fade in={visible} timeout={500 + (index * 100)} style={{ transitionDelay: `${index * 50}ms` }}>
              <div>
                <ImageContainer>
                  <Image 
                    src={imgSrc} 
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease-in-out" }}
                    loading={index < 6 ? "eager" : "lazy"}
                    quality={80}
                  />
                  <ImageOverlay className="image-overlay" />
                </ImageContainer>
              </div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

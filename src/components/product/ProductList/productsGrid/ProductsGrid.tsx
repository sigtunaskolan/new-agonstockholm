import * as React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";

type ItemContainerStyledProps = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  imgesList: string[];
};

const ImageContainer = styled.div(() => ({
  position: "relative",
  width: "100%",
  height: "250px",
  overflow: "hidden",
}));

export default function ProductGrid({ imgesList }: Props) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {imgesList.map((imgSrc, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ImageContainer>
              <Image 
                src={imgSrc} 
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                className="object-cover"
                loading={index < 6 ? "eager" : "lazy"}
                quality={80}
              />
            </ImageContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

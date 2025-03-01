import * as React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

type ItemContainerStyledProps = React.HTMLAttributes<HTMLDivElement> & {
  bgImg?: string;
};

type Props = {
  imgesList: string[];
};

const Item = styled.div<ItemContainerStyledProps>(({ bgImg }) => ({
  width: "100%",
  height: "250px",
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
}));

export default function ProductGrid({ imgesList }: Props) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {imgesList.map((bgImg, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item bgImg={bgImg} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

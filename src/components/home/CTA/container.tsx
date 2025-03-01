import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";

type Props = {
  childrenArray: ReactNode[];
};

function Container({ childrenArray = [] }: Props) {
  return (
    <Grid container spacing={2}>
      {childrenArray.map((child, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={2.5}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}

export default Container;

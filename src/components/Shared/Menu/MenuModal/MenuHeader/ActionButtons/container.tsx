import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";

type Props = {
  childrenArray: ReactNode[];
};

function Container({ childrenArray = [] }: Props) {
  return (
    <Grid container spacing={2} justifyContent={"flex-end"}>
      {childrenArray.map((child, index) => (
        <Grid item key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}

export default Container;

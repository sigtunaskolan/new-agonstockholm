import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type Props = {
  children: ReactNode;
};

const theme = createTheme();

function MUIThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
}

export default MUIThemeProvider;

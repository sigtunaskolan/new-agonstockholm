import React, { ReactElement } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import initialTheme from "./initialValue";

interface Props {
  children: ReactElement;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={initialTheme}>{children}</EmotionThemeProvider>
  );
};

export default ThemeProvider;

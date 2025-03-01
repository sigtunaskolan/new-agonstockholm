// types/emotion.d.ts
import '@emotion/react';

// Extending the theme to match your application's theme structure
declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      background: {
        default: string;
        paper: string;
      };
    };
    spacing: (factor: number) => string;
    breakpoints: {
      up: (key: string) => string;
      down: (key: string) => string;
      between: (start: string, end: string) => string;
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    maxWidth: string;
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

type ColorPalette = {
  primary: string;
  secondary: string;
  secondaryDark: string;
  white: string;
  gray: string;
  grayDark: string;
  lightGray: string;
  hoverGray: string;
  silverGray: string;
  backgroundColor: string;
  backgroundColorLight: string;
  active: string;
  black: string;
  lightBlack: string;
};

type BreakPoint = {
  mobile: string;
  tablet: string;
  desktop: string;
};

interface Theme {
  colors: ColorPalette;
  breakPoint: BreakPoint;
}

export default Theme;

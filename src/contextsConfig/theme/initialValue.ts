import Theme from "./themeType";

const initialTheme: Theme = {
  colors: {
    primary: "#52F597",
    secondary: "#030712",
    secondaryDark: "#151024",
    white: "#FFF",
    gray: "#fafafa",
    grayDark: "#5e6068",
    lightGray: "#adb1b9",
    hoverGray: "#7a7a7a",
    silverGray: "#c0c0c0ff",
    active: "#E57E44",
    backgroundColor: "rgb(10, 10, 10)",
    backgroundColorLight: "#f2ede6",
    black: "#000",
    lightBlack: "rgba(0, 0, 0, 0.9)",
  },
  breakPoint: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
};

export default initialTheme;

import { createTheme } from "@mui/material"

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "96px",
      fontWeight: 300,
    },
    h2: {
      fontSize: "60px",
      fontWeight: 300,
    },
    h3: {
      fontSize: "48px",
      fontWeight: 400,
    },
    h4: {
      fontSize: "34px",
      fontWeight: 400,
    },
    h5: {
      fontSize: "24px",
      fontWeight: 500,
    },
    h6: {
      fontSize: "20px",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    button: {
      fontSize: "12px",
      fontWeight: 700,
    }
  },
  palette: {
    primary: {
      main: "#3399FF", // blue300
      light: "#a7cff7", // blue100
      dark: "#0065cb", // blue500
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    text: {
      primary: "#121212", // black500
      secondary: "#8a8a8a", // black300
      disabled: "#e5e5e5", // black100
    },
    error: {
      main: "#ff0000",
    },
  },
  shape: {
    borderRadius: 20, 
  },
});

const fontSizeh1 = "96px";
const fontSizeh2 = "60px";
const fontSizeh3 = "48px";
const fontSizeh4 = "34px";
const fontSizeh5 = "24px";
const fontSizeh6 = "20px";
const fontSizeSub1 = "16px";
const fontSizeSub2 = "14px";
const fontSizeSub3 = "12px";
const fontSizeSub4 = "10px";
const fontSizeBody1 = "16px";
const fontSizeBody2 = "14px";
const fontSizeButton = "12px";
const fontWeighth1 = 300;
const fontWeighth2 = 300;
const fontWeighth3 = 400;
const fontWeighth4 = 400;
const fontWeighth4Bold = 700;
const fontWeighth5 = 500;
const fontWeighth6 = 500;
const fontWeightSub1 = 400;
const fontWeightSub2 = 400;
const fontWeightBody1 = 400;
const fontWeightBody2 = 400;
const fontWeightButton = 700;
const blue100 = "#a7cff7";
const blue200 = "#53a9ff";
const blue300 = "#3399FF";
const blue400 = "#007FFF";
const blue500 = "#0065cb";
const blue600 = "#004992";
const black100 = "#e5e5e5";
const black200 = "#b9b9b9";
const black300 = "#8a8a8a";
const black400 = "#3c3c3c";
const black500 = "#121212";
const bgc = "#f5f5f5";
const white = "#fff";
const red = "#ff0000";
const shadow = "0px 0px 15px rgba(0, 0, 0, 0.1)";
const bottomBorderRadius = "0px 0px 20px 20px";
const topBorderRadius = "20px 20px 0px 0px";
const badgeBorderRadius = "20px";

export {
  fontSizeh1, fontSizeh2, fontSizeh3, fontSizeh4, fontSizeh5, fontSizeh6,
  fontSizeSub1, fontSizeSub2, fontSizeSub3, fontSizeSub4,
  fontSizeBody1, fontSizeBody2, fontSizeButton,
  
  fontWeighth1, fontWeighth2, fontWeighth3, fontWeighth4, fontWeighth4Bold,
  fontWeighth5, fontWeighth6, fontWeightSub1, fontWeightSub2,
  fontWeightBody1, fontWeightBody2, fontWeightButton,
  
  blue100, blue200, blue300, blue400, blue500, blue600,
  black100, black200, black300, black400, black500, 
  bgc, white, red, shadow, bottomBorderRadius, topBorderRadius, badgeBorderRadius,
};

export default theme
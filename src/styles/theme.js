import { createTheme } from "@mui/material/styles";

import twiconWoff from "../fonts/twicon.woff";
import twiconWoff2 from "../fonts/twicon.woff2";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3FB195",
    },
  },
  breakpoints: {
    values: {
      mobile: 0, // 375
      tablet: 768,
      desktop: 1440,
    },
  },
  spacing: 10,
  typography: {
    fontFamily: "'Noto Sans TC', sans-serif",
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "twicon";
          src: url(${twiconWoff2}) format("woff2"),
            url(${twiconWoff}) format("woff");
          font-weight: 400;
          font-style: Regular;
        }
        body {
          background-color: #FAFAFA;
        }
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          border-radius: 30px;
          background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 30px;
          background-color: #bbb;
        }
      `,
    },
    // MuiTypography: {
    //   styleOverrides: {
    //     body1: {
    //       fontSize: "2rem",
    //     },
    //   },
    // },
  },
});

export default theme;

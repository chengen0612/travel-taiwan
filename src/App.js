import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";

import Menu from "./components/Menu";
import Landing from "./components/Landing";

// console.log(theme);
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;

import { createRoot } from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Root } from "./Root.tsx";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 900,
      lg: 1290,
      xl: 1600,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>
);

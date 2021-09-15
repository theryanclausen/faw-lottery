import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
const theme = createTheme({
  palatte: {
    info: "white",
  },
  typography: {
    fontFamily: ["'Overlock'", "cursive"].join(","),
    h1: {
      fontWeight: "900",
    },
    h5: {
      fontStyle: "italic",
      color: "white",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

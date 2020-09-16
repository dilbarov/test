import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App/App";
import { FLAT_THEME, ThemeContext } from "@skbkontur/react-ui";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={FLAT_THEME}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { MyContext } from "./MyContext";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{ name: "walber", email: "walbergomes@email.com" }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

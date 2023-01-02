import React from "react";
import ReactDOM from "react-dom/client";
import { ImageContextProvider } from "./imageContext";
import "./index.css";
import App from "./App";

import Background from "./components/background";
import styles from "./MyStyles.module.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ImageContextProvider>
    <Router>
      <Background />
      <App />
    </Router>
  </ImageContextProvider>
);

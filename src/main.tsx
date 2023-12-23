import React from "react";
import ReactDOM from "react-dom/client";
import { ResetStyles } from "./styles/reset";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResetStyles />
    <App />
  </React.StrictMode>,
);

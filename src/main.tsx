import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./routes/App";
import { AppProvider } from "./state/AppContext";
import "./styles/app.css";

console.debug("AirReview demo boot", window.localStorage.getItem("session"));

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

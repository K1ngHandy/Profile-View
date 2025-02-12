import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App.js";
import { Analytics } from "@vercel/analytics/react";

console.log("Root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Analytics>
      <App />
    </Analytics>
  </React.StrictMode>
);

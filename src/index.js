import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/Index.css";
import App from "./App.js";

console.log("Root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

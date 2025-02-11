import React from "react";
import ReactDOM from "react-dom/client";
import "./css/Index.css";
import App from "./App";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";

console.log("Root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SpeedInsights>
      <Analytics> */}
    <App />
    {/* </Analytics>
    </SpeedInsights> */}
  </React.StrictMode>
);

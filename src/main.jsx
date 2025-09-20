import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ARApp from "./components/ARApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ARApp />
  </StrictMode>
);

import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import Card from "./card.jsx";
import ColorPicker from "./colorPicker.jsx";
import PasswordGenerator from "./passwordGenerator.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PasswordGenerator />
  </StrictMode>
);

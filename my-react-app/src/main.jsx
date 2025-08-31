import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.jsx";
import Hello from "./components/Hello.jsx";

function Request() {
  fetch("https://localhost:7023/Product/GetProducts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Hello name="John" Request={Request()} />
  </StrictMode>
);

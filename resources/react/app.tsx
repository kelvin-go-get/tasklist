import ReactDOM from "react-dom/client";

import "./index.css";
import React from "react";
import Main from "./Main";

const rootElement = document.getElementById("app");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<Main />);
} else {
    console.error("Failed to find the root element");
}

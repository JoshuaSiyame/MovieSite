// import modules/packages
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import component
import App from "./components/App";

// app entrance in the document 
const root = createRoot(
    document.getElementById("root") as HTMLElement
);

// render the app
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
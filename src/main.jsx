import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CustomRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <CustomRoutes />
    </StrictMode>
);

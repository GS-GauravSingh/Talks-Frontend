import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Layout />
    </StrictMode>
);

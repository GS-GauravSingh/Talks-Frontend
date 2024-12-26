import React from "react";
import commonStyles from "../commonStyles";
import { Navbar } from "../sections";
import { Outlet } from "react-router-dom";

function index() {
    return (
        <div
            className={`${commonStyles.border} ${commonStyles.background} h-screen w-screen`}
        >
            <div className={`h-full w-full flex flex-row`}>
                {/* Navigation Menu */}
                <Navbar />

                {/* For rendering children components */}
                <Outlet />
            </div>
        </div>
    );
}

export default index;

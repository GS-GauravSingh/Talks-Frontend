import React from "react";
import commonStyles from "../commonStyles";
import { Navbar } from "../sections";

function index() {
    return (
        <div className={`${commonStyles.border} h-screen w-screen`}>
            <div className={`h-full w-full flex flex-row`}>
                {/* Navigation Menu */}
                <Navbar />
            </div>
        </div>
    );
}

export default index;

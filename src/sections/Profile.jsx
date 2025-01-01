import React from "react";
import commonStyles from "../commonStyles";
import { Clock, X } from "@phosphor-icons/react";

function Profile({ handleToggleShowProfileInfo }) {
    return (
        <div
            className={`${commonStyles.borderLeft} w-1/4 h-full flex flex-col`}
        >
            {/* Header */}
            <div
                className={`flex items-center justify-between px-2 py-7 ${commonStyles.borderBottom}`}
            >
                <h3 className="text-black dark:text-white cursor-default">
                    Profile
                </h3>
                <button
                    className={`text-black dark:text-white hover:!text-darkCyan`}
                    onClick={handleToggleShowProfileInfo}
                >
                    <X size={20} weight="regular" />
                </button>
            </div>

            {/* Main Body */}
            <div className={`flex-grow flex flex-col gap-2 px-2`}>
                {/* User Image and other info */}
                <div className="w-full flex flex-col gap-4 py-4">
                    <img
                        src="https://images.unsplash.com/photo-1507499036636-f716246c2c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Profile Image"
                        className="h-28 w-44 object-cover object-center rounded-lg mx-auto"
                    />

                    <div className="flex flex-col">
                        <h3 className="text-gunmetalGray dark:text-white">
                            Alice Wanderlust
                        </h3>
                        <p className="text-sm">Sales Manager</p>
                        <p className="mt-2 text-sm flex flex-row items-center gap-2">
                            <span>
                                <Clock size={20} weight="regular" />
                            </span>
                            <span>6:40 AM Local Time</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

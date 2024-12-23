import React, { useState } from "react";
import commonStyles from "../commonStyles";
import { Chat, Chats, User } from "@phosphor-icons/react";
import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { ThemeSwitcher } from "../components";

function Navbar() {
    const [active, setActive] = useState(0);
    const navigationMenu = [
        {
            icon: <Chat size={20} weight="regular" />,
            title: "DMs",
        },

        {
            icon: <User size={20} weight="regular" />,
            title: "Profile",
        },
    ];

    return (
        <div
            className={`${commonStyles.borderRight} ${commonStyles.background} h-full px-2 py-2 space-y-8 flex flex-col items-center `}
        >
            {/* Chat Logo */}
            <span className="flex items-center justify-center bg-darkCyan text-white p-2 rounded-md cursor-default">
                <Chats size={30} weight="regular" />
            </span>

            {/* Navigation Menu */}
            <div className="space-y-2">
                {navigationMenu.map((obj, index) => (
                    <button
                        key={index}
                        className={`flex flex-col items-center justify-center gap-1 group`}
                        onClick={(event) => {
                            event.preventDefault();
                            setActive(index);
                        }}
                    >
                        <span
                            className={`${
                                active === index && "!bg-darkCyan !text-white"
                            } ${commonStyles.inputBackground} p-2 rounded-md group-hover:text-white group-hover:bg-darkCyan`}
                        >
                            {obj.icon}
                        </span>

                        <span
                            className={`${
                                active === index && "!text-darkCyan"
                            } text-xs group-hover:text-darkCyan font-semibold`}
                        >
                            {obj.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Dummy Container - Flex grow - Just to occupy some extra space */}
            <div className="flex-grow"></div>

            {/* Theme Switcher and Logout Button */}
            <div className="space-y-2">
                
                <ThemeSwitcher />

                <button className={`border border-red-600 rounded-md p-2 bg-red-600 text-white`}>
                    <SignOut size={20} weight="regular" />
                </button>
            </div>
        </div>
    );
}

export default Navbar;

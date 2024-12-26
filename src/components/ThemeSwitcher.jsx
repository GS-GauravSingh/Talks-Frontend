import React from "react";
import useTheme from "../hooks/useTheme";
import commonStyles from "../commonStyles";
import { MoonStars, Sun } from "@phosphor-icons/react";

function ThemeSwitcher() {
    const [theme, setTheme] = useTheme();
    function handleToggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <div
            className={`h-6 w-full border border-lightGray dark:border-darkCyan rounded-full cursor-pointer relative`}
            onClick={handleToggleTheme}
        >
            <div className={`h-full flex items-center max-w-fit absolute top-1/2 -translate-y-1/2  ${theme === "dark" ? "translate-x-[72%]" : "translate-x-0 left-[1px]"} transition-all duration-75 ease-linear`}>
                <span
                    className={`flex dark:hidden items-center justify-center bg-extraLightGray rounded-full p-[0.2rem]`}
                >
                    <Sun size={14} weight="regular" />
                </span>

                <span
                    className={`hidden dark:flex items-center justify-center bg-darkCyan rounded-full text-white p-[0.2rem]`}
                >
                    <MoonStars size={14} weight="regular" />
                </span>
            </div>
        </div>
    );
}

export default ThemeSwitcher;

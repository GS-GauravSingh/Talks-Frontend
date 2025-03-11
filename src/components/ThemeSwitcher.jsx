import React from "react";
import useTheme from "../hooks/useTheme";
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

function ThemeSwitcher() {
	const [theme, setTheme] = useTheme();

	// function to toggle theme.
	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

	return (
		<div className="w-full ">
			<label
				htmlFor=""
				className={`relative block h-7.5 w-full rounded-full border ${theme === "light" ? "border border-borderColor bg-borderColor" : "border-highlight bg-highlight"}`}
			>
				<input
					type="checkbox"
					className="absolute z-50 top-0 h-full w-full cursor-pointer opacity-0"
					onChange={toggleTheme}
				/>

				<span className={`absolute top-1/2 left-[3px] -translate-y-1/2 h-6 w-6 flex items-center justify-center translate-x-0 bg-white rounded-full duration-75 ease-linear ${theme === "dark" && "!right-[3px] !translate-x-full"}`}>
					<span className="dark:hidden">
						<IoMdSunny />
					</span>
					<span className="hidden dark:inline-block">
						<BsMoonStarsFill />
					</span>
				</span>
			</label>
		</div>
	);
}

export default ThemeSwitcher;

import React from "react";
import useTheme from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

function ThemeSwitcher() {
	const [theme, setTheme] = useTheme();

	// function to toggle theme.
	function toggleTheme() {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

	return (
		<label
			className={`relative block h-5 w-9 rounded-full border ${theme === "light" ? "border border-borderColor bg-borderColor" : "border-highlight bg-highlight"}`}
		>
			<input
				type="checkbox"
				className="absolute z-50 top-0 h-full w-full cursor-pointer opacity-0"
				onChange={toggleTheme}
			/>

			<span
				className={`absolute top-1/2 -translate-y-1/2 -left-1 size-5 flex items-center justify-center translate-x-0 rounded-full duration-75 ease-linear ${theme === "dark" ? "!-right-1 !translate-x-full bg-gray-800 text-white" : "bg-yellow-400 text-white"}`}
			>
				<span className="dark:hidden ">
					<Sun className="size-4" />
				</span>
				<span className="hidden dark:flex">
					<Moon className="size-4" />
				</span>
			</span>
		</label>
	);
}

export default ThemeSwitcher;

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useTheme() {
	const [theme, setTheme] = useLocalStorage("talks-theme", "light");

	useEffect(() => {
		const root = document.documentElement; // return the root element of HTML document i.e., HTML element.

		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [theme]);

	return [theme, setTheme];
}

export default useTheme;

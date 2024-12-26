import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useTheme() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        const body = document.body;
        theme === "dark"
            ? body.classList.add("dark")
            : body.classList.remove("dark");
    }, [theme, setTheme]);

    return [theme, setTheme];
}

export default useTheme;

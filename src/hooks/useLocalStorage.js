import { useState } from "react";

function useLocalStorage(key, initialValue) {
    // Initializing state variable using lazy loading - callback inside useState() will run only once on component mount.
    const [localStorageValue, setLocalStorageValue] = useState(() => {
        const storedValue = localStorage.getItem(key);

        // If key is present
        if (storedValue) {
            return JSON.parse(storedValue);
        }

        // if key is not present in the local storage.
        else {
            return initialValue;
        }
    });

    // Function to update our application state and local storage.
    function updateStateAndLocalStorage(valueOrFunc) {
        let updatedValue;
        if (typeof valueOrFunc === "function") {
            updatedValue = valueOrFunc(localStorageValue);
        } else {
            updatedValue = valueOrFunc;
        }

        setLocalStorageValue(updatedValue);
        localStorage.setItem(key, JSON.stringify(updatedValue));
    }

    return [localStorageValue, updateStateAndLocalStorage];
}

export default useLocalStorage;

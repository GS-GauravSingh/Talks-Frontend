import { useState } from "react";

function useLocalStorage(key, defaultValue) {
	const [localStorageValue, setLocalStorageValue] = useState(() => {
		try {
			const storedValue = localStorage.getItem(key);
			if (storedValue) {
				return JSON.parse(storedValue);
			} else {
				localStorage.setItem(key, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (error) {
			localStorage.setItem(key, JSON.stringify(defaultValue));
			return defaultValue;
		}
	});

	// below method is used to update the localstorage and the state also.
	function setLocalStorageAndStateValue(valueOrFunc) {
		let newValue;
		if (typeof valueOrFunc === "function") {
			const func = valueOrFunc;
			newValue = func(localStorageValue);
		} else {
			let value = valueOrFunc;
			newValue = value;
		}

		localStorage.setItem(key, JSON.stringify(newValue));
		setLocalStorageValue(newValue);
	}

	return [localStorageValue, setLocalStorageAndStateValue];
}

export default useLocalStorage;

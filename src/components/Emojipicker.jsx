import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import useTheme from "../hooks/useTheme";
import { Smile } from "lucide-react";

function Emojipicker() {
	const [theme, setTheme] = useTheme();
	const [showPicker, setShowPicker] = useState(false);
	function toggleShowPicker() {
		setShowPicker((prev) => !prev);
	}

	const pickerRef = useRef(null);
	const triggerRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				pickerRef.current &&
				!pickerRef.current.contains(event.target) &&
				triggerRef.current &&
				!triggerRef.current.contains(event.target)
			) {
				setShowPicker(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="relative h-full flex items-center">
			<span
				className={`flex items-center hover:text-highlight cursor-pointer ${showPicker && "text-highlight"}`}
				onClick={toggleShowPicker}
				ref={triggerRef}
			>
				<Smile className="size-4" />
			</span>

			{showPicker && (
				<div className="absolute right-0 -top-115" ref={pickerRef}>
					<EmojiPicker theme={theme} />
				</div>
			)}
		</div>
	);
}

export default Emojipicker;

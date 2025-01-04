import React, { useEffect, useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Smiley } from "@phosphor-icons/react";

function EmojiPicker() {
    const theme = JSON.parse(localStorage.getItem("talksTheme"));
    const triggerRef = useRef(null);
    const pickerRef = useRef(null);
    const [showPicker, setShowPicker] = useState(false);
    function handleToggleShowPicker(event) {
        event.preventDefault();
        setShowPicker((prev) => !prev);
    }

    // I want this useEffect to run on every re-render.
    useEffect(() => {
        function handleClickOutsideOfThePicker(event) {
            if (
                !triggerRef.current ||
                !pickerRef.current ||
                pickerRef.current.contains(event.target) ||
                triggerRef.current.contains(event.target)
            ) {
                return;
            }

            setShowPicker(false);
        }

        document.addEventListener("click", handleClickOutsideOfThePicker);

        // Cleanup function - Removing the event listener on component un-mount.
        return () =>
            document.removeEventListener(
                "click",
                handleClickOutsideOfThePicker
            );
    });

    // Function to handle what to do when user click on any emoji.
    function handleOnEmojiSelect() {}

    return (
        <div className="flex items-center relative">
            <button
                ref={triggerRef}
                className="flex items-center hover:text-darkCyan cursor-pointer"
                onClick={handleToggleShowPicker}
            >
                <Smiley size={18} weight="regular" />
            </button>

            <div
                ref={pickerRef}
                className="max-w-fit absolute bottom-[35px] right-0 z-50"
            >
                {showPicker && (
                    <Picker
                        data={data}
                        theme={theme}
                        onEmojiSelect={handleOnEmojiSelect}
                        autoFocus={true}
                    />
                )}
            </div>
        </div>
    );
}

export default EmojiPicker;

import React from "react";
import commonStyles from "../commonStyles";

function TypingIndicator() {
    return (
        <div className={`flex flex-row items-center gap-1.5 text-xs ${commonStyles.inputBackground} max-w-fit rounded rounded-tl-none`}>
            <div className={`text-xs  pl-4 py-2 `}>Typing</div>
            <div className="pr-4 py-2 space-x-[2px] flex items-center">
                <p className="animate-typingIndicatorAnimation">.</p>
                <p className="animate-typingIndicatorAnimation">.</p>
                <p className="animate-typingIndicatorAnimation">.</p>
            </div>
        </div>
    );
}

export default TypingIndicator;

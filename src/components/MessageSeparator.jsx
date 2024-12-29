import React from "react";
import commonStyles from "../commonStyles";

function MessageSeparator({timestamp}) {
    return (
        <div className="flex flex-row items-center gap-4">
            <div className={`flex-grow ${commonStyles.inputBackground} h-[1px] rounded-md`}></div>
            <div className="text-xs">{timestamp}</div>
            <div className={`flex-grow ${commonStyles.inputBackground} h-[1px] rounded-md`}></div>
        </div>
    );
}

export default MessageSeparator;

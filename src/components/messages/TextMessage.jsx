import { Check, Checks } from "@phosphor-icons/react";
import React from "react";
import commonStyles from "../../commonStyles";
import updateTextMessageAndExtractLinks from "../../utils/updateTextMessageAndExtractLinks";

function TextMessage({ type, author, content, timestamp, read_receipt }) {
    const { updatedMessage, urls } = updateTextMessageAndExtractLinks(
        content,
        type
    );

    return (
        <div
            className={`w-full max-w-[500px] ${
                type === "outgoing" && "ml-auto"
            } space-y-2`}
        >
            {type === "incoming" && <p className="text-xs">{author}</p>}

            <div
                className={`text-sm text-gunmetalGray dark:text-white ${
                    type === "incoming"
                        ? commonStyles.inputBackground + "rounded-tl-none"
                        : "bg-darkCyan !text-white rounded-tr-none"
                } px-4 py-4 rounded-lg flex flex-col justify-center cursor-default`}
            >
                <p dangerouslySetInnerHTML={{ __html: updatedMessage }}></p>
            </div>

            <p
                className={`${
                    type === "outgoing" && "justify-start flex-row-reverse"
                } text-xs flex flex-row items-center gap-2`}
            >
                <span
                    className={`${type === "incoming" && "hidden"} ${
                        read_receipt === "delivered" && "text-darkCyan"
                    }`}
                >
                    {read_receipt === "sent" ? (
                        <Check size={16} weight="regular" />
                    ) : (
                        <Checks size={20} weight="regular" />
                    )}
                </span>
                <span className="">{timestamp}</span>
            </p>
        </div>
    );
}

export default TextMessage;

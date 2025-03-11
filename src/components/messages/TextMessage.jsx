import React from "react";
import { IoCheckmarkOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import extractLinksFromTextMessage from "../../utils/extractLinksFromTextMessage";

function TextMessage({
	type = "outgoing",
	message = "",
	author = "",
	timestamp = "",
	readReceipt = "",
}) {
	const modifiedMessage = extractLinksFromTextMessage({ message, type });
	return (
		<div
			className={`${type === "incoming" ? "" : "ml-auto"} w-full max-w-[500px] flex flex-col justify-center gap-1`}
		>
			<p
				className={`${type === "incoming" ? "block" : "hidden"} text-xs`}
			>
				{author}
			</p>
			<p
				className={`${type === "incoming" ? "rounded-tl-none rounded-md bg-borderColor text-heading" : "bg-highlight text-white rounded-md rounded-tr-none"} tracking-wide text-xs px-4 py-4`} dangerouslySetInnerHTML={{__html: modifiedMessage}}
			>
				
			</p>
			<p
				className={`${type === "incoming" ? "" : "text-right justify-end"} text-xs flex flex-row items-center gap-2`}
			>
				<span>{timestamp}</span>
				<span className={`${type === "incoming" && "hidden"} text-lg`}>
					{readReceipt === "sent" ? (
						<IoCheckmarkOutline />
					) : (
						<IoCheckmarkDoneOutline
							className={`${readReceipt === "read" && "text-highlight"}`}
						/>
					)}
				</span>
			</p>
		</div>
	);
}

export default TextMessage;

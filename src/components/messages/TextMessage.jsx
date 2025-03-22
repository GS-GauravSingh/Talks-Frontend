import React from "react";
import extractLinksFromTextMessage from "../../utils/extractLinksFromTextMessage.util";
import { Check, CheckCheck } from "lucide-react";
import defaultUserAvatar from "../../assets/defaultUserAvatar.png";

function TextMessage({
	type = "outgoing",
	message = "",
	author = "",
	timestamp = "",
	readReceipt = "",
	avatar = defaultUserAvatar,
	ref,
}) {
	const modifiedMessage = extractLinksFromTextMessage({ message, type });

	return (
		<div
			ref={ref}
			className={`${type === "incoming" ? "" : "ml-auto flex-row-reverse"} w-full max-w-[500px] flex items-start gap-2`}
		>
			{/* Avatar */}
			<img src={avatar} alt="Profile Pic" className={`size-7`} />

			<div className="flex flex-col justify-center gap-1">
				{/* Author Name */}
				<p
					className={`${type === "incoming" ? "block" : "hidden"} text-xs`}
				>
					{author}
				</p>

				{/* Text Message */}
				<p
					className={`${type === "incoming" ? "rounded-tl-none rounded-md bg-borderColor text-heading" : "bg-highlight text-white rounded-md rounded-tr-none"} tracking-wide text-xs px-4 py-4`}
					dangerouslySetInnerHTML={{ __html: modifiedMessage }}
				></p>

				{/* Timestamp and Read Receipt */}
				<p
					className={`${type === "incoming" ? "" : "text-right justify-end"} text-xs flex flex-row items-center gap-2`}
				>
					<span>{timestamp}</span>
					<span
						className={`${type === "incoming" && "hidden"} text-lg`}
					>
						{readReceipt === "sent" ? (
							<Check className="size-4" />
						) : (
							<CheckCheck
								className={`${readReceipt === "read" && "text-highlight"} size-4`}
							/>
						)}
					</span>
				</p>
			</div>
		</div>
	);
}

export default TextMessage;

import React from "react";

function TypingIndicator({ author, avatar }) {
	return (
		<div className="flex items-start gap-2">
			{/* Avatar */}
			<img src={avatar} alt="Profile Pic" className={`size-7`} />

			{/* Typing Indicator */}
			<div className="text-xs rounded-tl-none rounded-md bg-borderColor text-heading/50 tracking-wide p-2 flex items-center gap-1">
				<span>Typing</span>
				<div className="space-x-[1px]">
					<span className="">.</span>
					<span className="">.</span>
					<span className="">.</span>
				</div>
			</div>
		</div>
	);
}

export default TypingIndicator;

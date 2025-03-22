import { MessagesSquare } from "lucide-react";
import React from "react";

function NoChatSelected() {
	return (
		<div className="h-full w-3/4 hidden lg:flex items-center justify-center bg-background">
			<div className="flex flex-col items-center">
				<div className="size-14 rounded-md flex items-center justify-center border border-highlight bg-highlight animate-bounce">
					<MessagesSquare className="size-10 text-black" />
				</div>

				<h3 className="text-xl text-heading mt-6">Welcome to <strong className="text-highlight">Talks!</strong></h3>
                <p className="text-base">Select a conversation from the sidebar to start chatting.</p>
			</div>
		</div>
	);
}

export default NoChatSelected;

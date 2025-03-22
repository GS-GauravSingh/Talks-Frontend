import React from "react";
import { ChatList, Messages, NoChatSelected } from "../sections";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

function Dashboard() {
	const { selectedConversation } = useSelector((state) => state.chat);

	return (
		<div className="h-screen pt-12 overflow-hidden flex flex-col border border-borderColor bg-background">
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full h-full shadow-borderColor flex flex-row overflow-hidden">
					<ChatList />

					{selectedConversation ? <Messages /> : <NoChatSelected />}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

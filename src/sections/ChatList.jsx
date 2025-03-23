import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Check, Loader, Plus, Users } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, startConversation } from "../utils/user.util";
import defaultUserAvatar from "../assets/defaultUserAvatar.png";
import { setSelectedConversation } from "../redux/slices/chatSlice";
import {
	subscribeToMessages,
	unsubscribeFromMessages,
} from "../utils/socket.util";

export default function ChatList() {
	const dispatch = useDispatch();
	const { onlineUsers } = useSelector((state) => state.socket);
	const { selectedConversation, contacts, contactsLoading } = useSelector(
		(state) => state.chat
	);
	const [showOnlineOnly, setShowOnlineOnly] = useState(false);

	// Effect 1: Fetch contacts on mount
	useEffect(() => {
		dispatch(getContacts());
	}, []); // Runs only on mount

	// Effect 2: Subscribe to messages when a conversation is selected
	useEffect(() => {
		if (selectedConversation) {
			dispatch(subscribeToMessages());
		}
	}, [selectedConversation]); // Runs when `selectedConversation` changes

	if (contactsLoading) {
		return (
			<div className="h-full w-1/4 border-r border-borderColor flex items-center justify-center text-xs gap-2">
				<Loader className="size-7 animate-spin" />
				<p>Loading Contact(s)...</p>
			</div>
		);
	}

	function handleSetSelectedUser(user) {
		dispatch(setSelectedConversation(user)); // set selected conversation
		dispatch(startConversation(user?._id)); // start a conversation
	}

	const filteredContacts = showOnlineOnly
		? contacts?.filter((contact) => onlineUsers.includes(contact._id))
		: contacts;

	return (
		<div
			className={`h-full flex flex-col w-full lg:max-w-1/4 border-r border-borderColor ${selectedConversation ? "hidden lg:flex" : ""}`}
		>
			{/* Header */}
			<div className="w-full h-fit border-b border-borderColor space-y-2 px-4 py-[1rem]">
				<div className="w-full flex flex-row items-center justify-between gap-4">
					<div className="flex flex-row items-center gap-4">
						<Users className="size-6 text-heading" />
						<h3 className="text-heading whitespace-nowrap font-semibold">
							Contacts
						</h3>
					</div>
					<button className="text-xs bg-borderColor text-heading p-1 rounded-md cursor-pointer">
						<Plus className="size-5" />
					</button>
				</div>

				{/* Show Online Users */}
				<div className="flex items-center cursor-pointer gap-4 text-xs">
					<div className="flex items-center rounded-md relative">
						<input
							type="checkbox"
							id="checkboxOnlineUser"
							onChange={(event) =>
								setShowOnlineOnly(event.target.checked)
							}
							className="appearance-none size-5 bg-borderColor rounded-md border border-borderColor hover:border-highlight checked:bg-highlight"
						/>

						<Check
							className={`size-4 absolute top-1/2 left-1/2 -translate-1/2 ${showOnlineOnly ? "inline" : "hidden"} text-heading`}
						/>
					</div>
					<label
						htmlFor="checkboxOnlineUser"
						className={`cursor-pointer ${showOnlineOnly && "text-highlight font-medium"}`}
					>
						Show online only &nbsp;
						{showOnlineOnly
							? `(${onlineUsers.length - 1} online)`
							: ""}
					</label>
				</div>
			</div>

			{/* Search Input */}
			{/* <div className="w-full h-fit flex items-center  px-4 py-4">
				<div className="relative w-full h-10 rounded-md bg-borderColor text-xs pl-4 pr-14 text-heading tracking-wider border border-transparent">
					<input
						type="text"
						className="absolute z-10 top-0 left-0 h-full w-full pl-4 pr-14 outline-none border-none"
						placeholder="Search here..."
					/>

					<span className="absolute z-0 right-4 top-1/2 -translate-y-1/2 text-2xl cursor-text text-bodyText">
						<IoSearchOutline />
					</span>
				</div>
			</div> */}

			{/* Chat List */}
			<div className="h-full flex flex-col overflow-auto no-scrollbar">
				{filteredContacts?.map((user) => {
					return (
						<button
							key={user._id}
							className={`cursor-pointer flex flex-row items-center gap-2 px-2 py-2 hover:bg-borderColor ${selectedConversation?._id === user._id ? "bg-borderColor/70 ring-1 ring-borderColor" : ""}`}
							onClick={() => handleSetSelectedUser(user)}
						>
							<div className="flex relative">
								<img
									src={user.avatar || defaultUserAvatar}
									alt={`${user.firstname} ${user.lastname}`}
									className="h-12 w-12 object-center object-contain rounded-full"
								/>

								{/* Online Indicator */}
								{onlineUsers.includes(user._id) ? (
									<span className="bg-green-400 size-3 rounded-full absolute right-0 bottom-0"></span>
								) : (
									""
								)}
							</div>

							<div className="flex flex-col justify-center overflow-hidden">
								<h3 className="text-heading text-sm">
									{user.firstname} {user.lastname}
								</h3>
								<p className="text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[40ch] text-left">
									{onlineUsers.includes(user._id)
										? "Online"
										: "Offline"}
								</p>
							</div>
						</button>
					);
				})}
				{/* In case of 0 online users */}
				{filteredContacts.length === 0 && (
					<div className="text-center h-full flex items-center justify-center">
						No online user
					</div>
				)}
			</div>
		</div>
	);
}

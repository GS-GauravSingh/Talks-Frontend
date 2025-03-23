import React, { useEffect, useRef, useState } from "react";
import user from "../assets/userImages/user_03.png";
import { FaPaperPlane } from "react-icons/fa";
import { Gif, Smiley } from "@phosphor-icons/react";
import {
	Emojipicker,
	GifPicker,
	TextMessage,
	TypingIndicator,
} from "../components";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { Image, Loader, X } from "lucide-react";
import { ChevronsLeft } from "lucide-react";
import { setSelectedConversation } from "../redux/slices/chatSlice";
import { sendMessage } from "../utils/user.util";
import toast from "react-hot-toast";
import defaultUserAvatar from "../assets/defaultUserAvatar.png";
import formatMessageTime from "../utils/formatMessageTime.util";
import { unsubscribeFromMessages } from "../utils/socket.util";

function Messages() {
	const { selectedConversation, conversationsLoading, conversations } =
		useSelector((state) => state.chat);

	const { socketInstance } = useSelector((state) => state.socket);

	const { authUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [message, setMessage] = useState("");
	const fileInputRef = useRef(null);
	const messagesEndRef = useRef(null);

	const [showImagePreview, setShowImagePreview] = useState(false);
	const [showUserProfile, setShowUserProfile] = useState(false);
	const [showGifPicker, setShowGifPicker] = useState(false);
	const [showTypingIndicator, setShowTypingIndicator] = useState(false);
	const gifTriggerRef = useRef(null);

	useEffect(() => {
		// Scroll to the last message when messages update
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [conversations?.messages]); // Runs when `messages` change

	useEffect(() => {
		socketInstance.on("startedTyping", (data) => {
			if (selectedConversation?.id === data.userId) {
				setShowTypingIndicator(true);

				setTimeout(() => {
					setShowTypingIndicator(false);
				}, 2000);
			}
		});
	}, [selectedConversation]);

	function toggleShowProfile() {
		setShowUserProfile((prev) => !prev);
	}
	function toggleShowGifPicker() {
		setShowGifPicker((prev) => !prev);
	}

	if (conversationsLoading) {
		return (
			<div className="h-full w-full flex items-center justify-center gap-4">
				<Loader className="size-10 animate-spin" />
				<p>Loading Conversation(s)...</p>
			</div>
		);
	}

	function handleMoveBack() {
		dispatch(setSelectedConversation(null));
	}

	async function handleSendMessage() {
		if (!message.trim() && !showImagePreview) {
			return;
		}

		try {
			await dispatch(
				sendMessage({
					userId: selectedConversation?._id,
					content: message,
					image: showImagePreview,
				})
			);

			// clear the send message input.
			setMessage("");
			setShowImagePreview(null);
			if (fileInputRef.current) {
				fileInputRef.current.value =
					""; /* clears the selected file, resetting the file input. */
			}
		} catch (error) {
			console.log(error);
		}
	}

	function handleImageUpload(event) {
		const file = event.target.files[0];
		if (!file.type.startsWith("image/")) {
			toast.error("Please select an image file");
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			setShowImagePreview(reader.result);
		};
		reader.readAsDataURL(file);
	}

	function handleRemovePreviewImage() {
		setShowImagePreview(null);
		if (fileInputRef.current) {
			fileInputRef.current.value =
				""; /* clears the selected file, resetting the file input. */
		}
	}

	function findAuthor(userId) {
		const obj = conversations?.participants.filter(
			(participant) => participant._id === userId
		);

		return `${obj[0]?.firstname} ${obj[0]?.lastname}`;
	}

	return (
		<>
			<div
				className={`h-full ${showUserProfile ? "w-3/4" : "w-full"} ${selectedConversation ? "flex" : "hidden"} flex-col pb-2`}
			>
				{/* Header */}
				<div className="flex flex-row items-center justify-between border-b border-borderColor px-4 py-[0.75rem]">
					<div className="w-full flex items-center gap-4">
						<ChevronsLeft
							className="text-heading size-5 lg:hidden"
							onClick={handleMoveBack}
						/>
						<div className="flex flex-row gap-4 items-center">
							<img
								src={
									selectedConversation?.avatar
										? selectedConversation?.avatar
										: defaultUserAvatar
								}
								alt="User's Profile Image"
								className={`object-center object-contain size-10 md:size-14 cursor-pointer`}
								onClick={toggleShowProfile}
							/>
							<div>
								<h3 className="text-heading text-sm md:text-lg">
									{`${selectedConversation?.firstname} ${selectedConversation?.lastname}`}
								</h3>
								<p
									className={`text-xs ${selectedConversation?.status === "Online" && "text-green-400"}`}
								>
									{selectedConversation?.status}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Messages Container */}
				<div className="flex-grow px-4 space-y-4 pt-4 mb-4 h-full overflow-auto no-scrollbar">
					{conversations?.messages?.map((message, index) => {
						return (
							<TextMessage
								key={index}
								type={`${message.author === authUser._id ? "outgoing" : "incoming"}`}
								message={`${message?.content}`}
								author={findAuthor(message.author)}
								avatar={`${message.author === authUser._id ? authUser.avatar || defaultUserAvatar : selectedConversation.avatar || defaultUserAvatar}`}
								timestamp={formatMessageTime(message.createdAt)}
								readReceipt="read"
								ref={messagesEndRef}
							/>
						);
					})}

					<div className="invisible" ref={messagesEndRef}></div>

					{/* Typing Indicator */}
					{showTypingIndicator && (
						<TypingIndicator
							author={findAuthor(message.author)}
							avatar={`${message.author === authUser._id ? authUser.avatar || defaultUserAvatar : selectedConversation.avatar || defaultUserAvatar}`}
						/>
					)}
				</div>

				{/* Buttons */}
				<div className="w-full flex flex-col gap-2 px-4 relative">
					{/* Show Image Preview */}
					{showImagePreview ? (
						<div className="absolute left-4 bottom-[3rem]">
							<div className="relative">
								<img
									src={showImagePreview}
									alt="Selected Image Preview"
									className="size-24 object-center object-cover rounded-md shadow-borderColor shadow"
								/>

								{/* Remove Image Button */}
								<button
									onClick={handleRemovePreviewImage}
									className="absolute z-10 -top-1.5 -right-1.5 size-5 rounded-full bg-heading text-black flex items-center justify-center cursor-pointer"
								>
									<X className="size-4" />
								</button>
							</div>
						</div>
					) : (
						""
					)}

					{/* Main Button Container */}
					<div className="flex flex-row items-center gap-4 w-full">
						<div className="flex items-center w-full relative">
							<input
								type="text"
								className="w-full h-10 bg-borderColor rounded-md outline-none border border-highlight pl-4 pr-24 text-xs tracking-wide text-heading"
								placeholder="Type your message here..."
								value={message}
								onChange={(event) => {
									setMessage(event.target.value);

									// Emit start typing event
									socketInstance.emit("startTyping", {
										userId: selectedConversation?._id,
									});
								}}
							/>

							<div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-row items-center gap-4 h-full">
								{/* Image Upload */}
								<span className="">
									<label
										htmlFor="imageUpload"
										className="cursor-pointer hover:text-highlight active:text-highlight"
									>
										<Image className="size-4 " />
									</label>
									<input
										type="file"
										accept="image/*" /* accepts only images (JPEG, PNG, etc.). */
										id="imageUpload"
										className="hidden"
										onChange={handleImageUpload}
										ref={fileInputRef}
									/>
								</span>

								{/* GIF Picker */}
								<span
									className={`hover:text-highlight cursor-pointer ${showGifPicker && "text-highlight"}`}
									onClick={toggleShowGifPicker}
									ref={gifTriggerRef}
								>
									<Gif size={20} weight="bold" />
								</span>

								<Emojipicker />
							</div>
						</div>

						{/* Send Message Button */}
						<button
							onClick={handleSendMessage}
							className="h-10 px-4 flex items-center border border-highlight rounded-md text-white text-xl bg-highlight cursor-pointer active:scale-95 transition-all duration-75 ease-linear"
						>
							<FaPaperPlane />
						</button>
					</div>

					{showGifPicker && (
						<GifPicker
							triggerRef={gifTriggerRef}
							setShowGifPicker={setShowGifPicker}
						/>
					)}
				</div>
			</div>

			{showUserProfile && (
				<Profile toggleShowProfile={toggleShowProfile} />
			)}
		</>
	);
}

export default Messages;

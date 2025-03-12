import React, { useRef, useState } from "react";
import user from "../assets/userImages/user_03.png";
import { FaPaperPlane } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { Gif, Smiley } from "@phosphor-icons/react";
import { Emojipicker, GifPicker, TextMessage } from "../components";
import Profile from "./Profile";

function Messages() {
	const [showUserProfile, setShowUserProfile] = useState(false);
	const [showGifPicker, setShowGifPicker] = useState(false);
	const gifTriggerRef = useRef(null);
	function toggleShowProfile() {
		setShowUserProfile((prev) => !prev);
	}
	function toggleShowGifPicker() {
		setShowGifPicker((prev) => !prev);
	}

	return (
		<>
			<div
				className={`h-screen ${showUserProfile ? "w-3/4" : "w-full"} flex flex-col pb-2`}
			>
				{/* Header */}
				<div className="flex flex-row items-center justify-between border-b border-borderColor px-4 py-[0.75rem]">
					<div className="flex flex-row gap-4 items-center">
						<img
							src={user}
							alt="User's Profile Image"
							className="object-center object-contain h-14 w-14 cursor-pointer"
							onClick={toggleShowProfile}
						/>
						<div>
							<h3 className="text-heading text-xl">
								Robert Jhon
							</h3>
							<p className="text-xs">Reply to message(s)</p>
						</div>
					</div>
				</div>

				{/* Messages Container */}
				<div className="flex-grow px-4 space-y-4 pt-4 mb-4 h-full overflow-auto no-scrollbar">
					<TextMessage
						type="outgoing"
						message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo impedit, distinctio adipisci exercitationem necessitatibus consequatur fuga accusamus ullam facilis. Libero. https://example.com and visit https://mywebsite.com"
						author="Robert Jhon"
						timestamp="2:00 pm"
						readReceipt="read"
					/>

					<TextMessage
						type="incoming"
						message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo impedit, distinctio adipisci exercitationem necessitatibus consequatur fuga accusamus ullam facilis. Libero. https://example.com and visit https://mywebsite.com"
						author="Robert Jhon"
						timestamp="2:01 pm"
						readReceipt="sent"
					/>

					<TextMessage
						type="outgoing"
						message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo impedit, distinctio adipisci exercitationem necessitatibus consequatur fuga accusamus ullam facilis. Libero."
						author="Robert Jhon"
						timestamp="2:00 pm"
						readReceipt="delivered"
					/>

					<TextMessage
						type="outgoing"
						message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo impedit, distinctio adipisci exercitationem necessitatibus consequatur fuga accusamus ullam facilis. Libero."
						author="Robert Jhon"
						timestamp="2:00 pm"
						readReceipt="sent"
					/>
				</div>

				{/* Buttons */}
				<div className="w-full flex flex-col gap-2 px-4">
					<div className="flex flex-row items-center gap-4 w-full">
						<div className="flex items-center w-full relative">
							<input
								type="text"
								className="w-full h-10 bg-borderColor rounded-md outline-none border border-highlight pl-4 pr-24 text-xs tracking-wide text-heading"
								placeholder="Type your message here..."
							/>

							<div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-row items-center gap-4 h-full">
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
						<button className="h-10 px-4 flex items-center border border-highlight rounded-md text-white text-xl bg-highlight cursor-pointer">
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

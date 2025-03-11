import React, { useState } from "react";
import user from "../assets/userImages/user_03.png";
import { FaPaperPlane } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { Gif, Smiley } from "@phosphor-icons/react";
import { TextMessage } from "../components";
import Profile from "./Profile";

function Messages() {
	const [showUserProfile, setShowUserProfile] = useState(false);
	function toggleShowProfile() {
		setShowUserProfile((prev) => !prev);
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
				<div className="flex flex-row items-center gap-4 w-full px-4">
					<div className="flex items-center w-full relative">
						<input
							type="text"
							className="w-full h-10 bg-borderColor rounded-md outline-none border border-highlight px-4 text-xs tracking-wide text-heading"
							placeholder="Type your message here..."
						/>

						<div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-row items-center gap-2">
							<span className="hover:text-highlight cursor-pointer">
								<MdGif className="text-[2.5rem]" />
							</span>
							<span className="hover:text-highlight cursor-pointer">
								{/* <GrEmoji className="text-xl font-bold" /> */}
								<Smiley size={20} weight="bold" />
							</span>
						</div>
					</div>

					{/* Send Message Button */}
					<button className="h-10 px-4 flex items-center border border-highlight rounded-md text-white text-xl bg-highlight cursor-pointer">
						<FaPaperPlane />
					</button>
				</div>
			</div>

			{showUserProfile && (
				<Profile toggleShowProfile={toggleShowProfile} />
			)}
		</>
	);
}

export default Messages;

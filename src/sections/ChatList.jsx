import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import user01 from "../assets/userImages/user_01.png";
import user02 from "../assets/userImages/user_02.png";
import user03 from "../assets/userImages/user_03.png";
import user04 from "../assets/userImages/user_04.png";
import user05 from "../assets/userImages/user_05.png";
import user06 from "../assets/userImages/user_06.png";
import user07 from "../assets/userImages/user_07.png";
import user08 from "../assets/userImages/user_08.png";
import user09 from "../assets/userImages/user_09.png";
import user10 from "../assets/userImages/user_10.png";
import user11 from "../assets/userImages/user_11.png";
import user12 from "../assets/userImages/user_12.png";
import user13 from "../assets/userImages/user_13.png";
import user14 from "../assets/userImages/user_14.png";
import user15 from "../assets/userImages/user_15.png";
import user16 from "../assets/userImages/user_16.png";
import user17 from "../assets/userImages/user_17.png";
import user18 from "../assets/userImages/user_18.png";
import user19 from "../assets/userImages/user_19.png";
import user20 from "../assets/userImages/user_20.png";

export default function ChatList() {
	const users = [
		{
			imgSrc: user01,
			name: "Henry Dholi",
			message: "I came across your profile and...",
		},
		{
			imgSrc: user02,
			name: "Mariya Desoja",
			message: "I like your confidence 💪",
		},
		{
			imgSrc: user03,
			name: "Robert Jhon",
			message: "Can you share your offer?",
		},
		{
			imgSrc: user04,
			name: "Cody Fisher",
			message: "I'm waiting for your response!",
		},
		{
			imgSrc: user05,
			name: "Jenny Wilson",
			message: "I came across your profile and...",
		},
		{
			imgSrc: user06,
			name: "Sophie Turner",
			message: "Your project looks amazing! 👏",
		},
		{
			imgSrc: user07,
			name: "Mark Paul",
			message: "Hey! Can you connect with me?",
		},
		{
			imgSrc: user08,
			name: "Ava Smith",
			message: "I'm impressed with your work.",
		},
		{
			imgSrc: user09,
			name: "David Miller",
			message: "I have a job offer for you.",
		},
		{
			imgSrc: user10,
			name: "Emily Watson",
			message: "Looking forward to hearing from you.",
		},
		{
			imgSrc: user11,
			name: "Olivia Brown",
			message: "I'm interested in collaborating.",
		},
		{
			imgSrc: user12,
			name: "Ethan Hall",
			message: "Your recent post was inspiring.",
		},
		{
			imgSrc: user13,
			name: "Ella Scott",
			message: "Can we discuss the project?",
		},
		{
			imgSrc: user14,
			name: "Daniel Moore",
			message: "I have a business proposal.",
		},
		{
			imgSrc: user15,
			name: "Sophia Lee",
			message: "I would love to connect with you.",
		},
		{
			imgSrc: user16,
			name: "James Carter",
			message: "Your profile looks interesting.",
		},
		{
			imgSrc: user17,
			name: "Lily Adams",
			message: "I'm impressed by your skills.",
		},
		{
			imgSrc: user18,
			name: "Jacob Williams",
			message: "I have a new project for you.",
		},
		{
			imgSrc: user19,
			name: "Grace Thompson",
			message: "Let's connect and collaborate.",
		},
		{
			imgSrc: user20,
			name: "Benjamin Taylor",
			message: "I need your help with something.",
		},
	];

	return (
		<div className="h-screen w-1/4 border-t-0 border-b-0 border border-borderColor flex flex-col">
			{/* Header */}
			<div className="w-full h-fit flex flex-row items-center gap-4 border-b border-borderColor px-4 py-6">
				<h3 className="text-heading text-xl whitespace-nowrap font-semibold">
					Active Conversations
				</h3>
				<span className="text-xs bg-borderColor text-heading p-2 rounded-md">
					10
				</span>
			</div>

			{/* Search Input */}
			<div className="w-full h-fit flex items-center  px-4 py-4">
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
			</div>

			{/* Chat List */}
			<div className="h-full flex flex-col overflow-auto no-scrollbar">
				{users.map(({ imgSrc, name, message }, index) => {
					return (
						<div
							key={index}
							className="cursor-pointer flex flex-row items-center gap-2 px-2 py-2 hover:bg-borderColor"
						>
							<img
								src={imgSrc}
								alt="User's Profile Image"
								className="h-12 w-12 object-center object-contain"
							/>

							<div className="flex flex-col justify-center overflow-hidden">
								<h3 className="text-heading text-sm">{name}</h3>
								<p className="text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[40ch]">
									{message}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

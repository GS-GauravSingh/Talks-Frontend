import { UserRoundPen, Pen, Skull } from "lucide-react";
import React, { useState } from "react";
import { DeleteAccount, UpdatePassword, UpdateProfile } from "../../sections";

function Profile() {
	const menu = [
		{
			title: "Update Profile",
			icon: <UserRoundPen className="size-5" />,
		},
		{
			title: "Update Password",
			icon: <Pen className="size-5" />,
		},
		{
			title: "Danger Zone",
			icon: <Skull className="size-5" />,
		},
	];

	const [active, setActive] = useState(0);

	return (
		<div className="h-screen pt-16 flex flex-col gap-12 px-4 border border-borderColor">
			{/* Navigation Menu */}
			<div className="flex flex-row items-center justify-center border-b border-borderColor gap-6 w-full">
				{menu.map((obj, index) => {
					return (
						<div
							key={index}
							className={`flex flex-row items-center justify-center gap-2 group cursor-pointer relative py-4 ${active === index ? (index === menu.length - 1 ? "text-red-700" : "text-highlight") : ""}`}
							onClick={() => setActive(index)}
						>
							<span
								className={`${index === menu.length - 1 ? "group-hover:text-red-700" : "group-hover:text-highlight"}`}
							>
								{obj.icon}
							</span>
							<span
								className={`font-bold hidden sm:inline text-xs ${index === menu.length - 1 ? "group-hover:text-red-700" : "group-hover:text-highlight"} `}
							>
								{obj.title}
							</span>

							<span
								className={`absolute w-full left-0 -bottom-[1px] border-b rounded-full ${active === index ? "inline" : "hidden"} ${index === menu.length - 1 ? "border-red-700" : "border-highlight"}`}
							></span>
						</div>
					);
				})}
			</div>

			{
				active === 0 ? <UpdateProfile /> : active === 1 ? <UpdatePassword /> : <DeleteAccount />
			}
			
		</div>
	);
}

export default Profile;

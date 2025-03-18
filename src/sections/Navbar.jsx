import React, { useEffect, useState } from "react";
import { LuMessageSquare } from "react-icons/lu";
import { TbMessages } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import { ThemeSwitcher } from "../components";

function Navbar() {
	const menu = [
		{
			title: "DMs",
			icon: <LuMessageSquare />,
			path: "/dashboard",
		},
		{
			title: "Profile",
			icon: <FaRegUserCircle />,
			path: "/dashboard/update-profile",
		},
	];

	// Initializing the active navigation menu on component mount.
	const [active, setActive] = useState(() => {
		let activeIdx;
		for (let index = 0; index < menu.length; index++) {
			const element = menu[index];

			if (element.path === window.location.pathname) {
				activeIdx = index;
				break;
			}
		}

		return activeIdx;
	});

	return (
		<div className="h-full w-[4.5rem] min-w-[4.5rem] flex flex-col items-center gap-4 px-2 py-2">
			<div className="border-b border-borderColor py-[1.05rem] w-full flex justify-center">
				<div className="border rounded-md px-2 py-2 text-xl cursor-default text-highlight hover:bg-highlight transition-all duration-75 ease-in group">
					<TbMessages className="group-hover:text-white transition-all duration-75 ease-in" />
				</div>
			</div>

			{/* Navigation Menu */}
			<div className="flex-grow flex flex-col items-center gap-4">
				{menu.map(({ title, icon, path }, index) => {
					return (
						<NavLink
							key={index}
							to={path}
							className="text-center space-y-1 cursor-pointer"
							onClick={() => setActive(index)}
						>
							<div
								className={`${active === index ? "bg-highlight border-highlight" : ""} flex justify-center border border-borderColor rounded-md px-2 py-2 text-base`}
							>
								<div
									className={`${active === index ? "text-white" : ""} `}
								>
									{icon}
								</div>
							</div>
							<p
								className={`${active === index ? "text-highlight font-semibold" : ""} text-xs`}
							>
								{title}
							</p>
						</NavLink>
					);
				})}
			</div>

			{/* Logout Button and Theme Switcher */}
			<div className="border-t border-borderColor pt-4 w-full">
				<div className="flex flex-col items-center gap-4">
					<ThemeSwitcher />

					{/* Logout Button */}
					<button className="w-full flex justify-center border rounded-md px-2 py-1 text-xl text-red-500 hover:bg-red-500  hover:cursor-pointer transition-all duration-75 ease-in group">
						<IoIosLogOut className="group-hover:text-white transition-all duration-75 ease-in" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { ThemeSwitcher } from "../components";
import { MessagesSquare, Settings, User, LogOut, MessageSquare } from "lucide-react";
import { logoutUser } from "../utils/auth.util";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isAuthenticated } = useSelector((state) => state.auth);

	const menu = [
		{
			title: "DMs",
			icon: <MessagesSquare className="size-5" />,
			path: "/dashboard",
		},
		{
			title: "Profile",
			icon: <User className="size-5" />,
			path: "/user/profile",
		},
		{
			title: "Logout",
			icon: <LogOut className="size-5" />,
			path: "",
		},
	];

	async function handleLogout(index) {
		if (index !== menu.length - 1) return;

		try {
			await dispatch(logoutUser());
			navigate("/auth/signin");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<header className="w-full border border-borderColor fixed top-0 z-50 backdrop-blur-lg">
			<div className="mx-auto h-12">
				<div className="flex items-center justify-between px-2 sm:px-6  h-full">
					{/* Left Side - Contains Logo */}
					<Link to="/dashboard" className="flex items-center gap-2.5">
						<div className="size-7 rounded-md flex items-center justify-center border border-highlight bg-highlight">
							<MessagesSquare className="size-4 text-black" />
						</div>

						<div className="flex flex-col text-xs">
							<h3 className="text-heading font-semibold">
								Talks
							</h3>
							<p className="text-xs whitespace-nowrap hidden sm:block">
								Real-time, Real Conversations.
							</p>
						</div>
					</Link>

					{/* Right Side - Navigation Menu */}
					<div className="flex flex-row gap-4">
						<div className="flex flex-row items-center gap-4">
							{menu.map((obj, index) => {
								return (
									<Link
										to={obj.path}
										key={index}
										className={`btn btn-sm flex flex-row items-center gap-2 text-xs group ${!isAuthenticated ? "hidden" : ""}`}
										onClick={() => handleLogout(index)}
									>
										<span
											className={`${index === menu.length - 1 ? "group-hover:text-red-700" : "group-hover:text-highlight"}`}
										>
											{obj.icon}
										</span>
										<span
											className={`${index === menu.length - 1 ? "group-hover:text-red-700" : "group-hover:text-highlight"} font-bold hidden sm:inline`}
										>
											{obj.title}
										</span>
									</Link>
								);
							})}
						</div>

						{/* Theme Switcher Component */}
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;

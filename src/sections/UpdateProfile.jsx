import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import user from "../assets/userImages/user_08.png";
import {
	Camera,
	Desktop,
	EnvelopeSimple,
	Eye,
	EyeClosed,
	IdentificationBadge,
	Lock,
	LockSimple,
	User,
} from "@phosphor-icons/react";
import { CountrySelect } from "../components";

function UpdateProfile() {
	const [showPassword, setShowPassword] = useState(new Array(2).fill(false));
	const [active, setActive] = useState(() =>
		window.location.pathname === "/dashboard/update-profile" ? 0 : 1
	);

	const menu = [
		{
			title: "Update Profile",
			path: "/dashboard/update-profile",
		},
		{
			title: "Change Password",
			path: "/dashboard/change-password",
		},
	];
	return (
		<div className="border-l border-borderColor h-full w-full flex flex-col gap-6">
			{/* Navigation Menu */}
			<nav className="flex flex-row gap-8 px-12 border-b border-borderColor">
				{menu.map(({ title, path }, index) => {
					const isActive = window.location.pathname === path;
					return (
						<Link
							to={path}
							key={index}
							className={`relative pt-9 pb-[1.1rem] h-full `}
							onClick={() => setActive(index)}
						>
							<span className="text-heading text-sm">
								{title}
							</span>
							{isActive && (
								<span className="absolute w-full border-b -bottom-[1px] left-0 text-highlight rounded-md"></span>
							)}
						</Link>
					);
				})}
			</nav>

			{active === 0 ? (
				<>
					{/* File Upload - For User Avatar */}
					<div className="relative w-fit ml-12">
						<img
							src={user}
							alt="User Profile"
							className="object-center object-contain w-24 h-24"
						/>

						<label
							htmlFor="fileUpload"
							className="absolute right-0 bottom-0 text-white bg-highlight p-[5px] rounded-full cursor-pointer"
						>
							<Camera size={20} weight="bold" />
						</label>
						<input type="file" id="fileUpload" className="hidden" />
					</div>

					{/* Form */}
					<form className="flex-grow ml-12 flex flex-col gap-4 max-w-[500px] overflow-auto no-scrollbar pb-2">
						{/* First and Last Name */}
						<div className="flex flex-col gap-4 sm:flex-row">
							{/* First name */}
							<div className="w-full flex flex-col gap-1 justify-center">
								<label
									htmlFor="userFirstName"
									className="text-heading text-sm"
								>
									Firstname
								</label>
								<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
									<input
										type="text"
										id="userFirstName"
										placeholder="Enter your First Name"
										className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
									/>
									<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
										<User size={20} weight="regular" />
									</span>
								</div>
							</div>

							{/* Last name */}
							<div className="w-full flex flex-col gap-1 justify-center">
								<label
									htmlFor="userLastName"
									className="text-heading text-sm"
								>
									Lastname
								</label>
								<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
									<input
										type="text"
										id="userLastName"
										placeholder="Enter your Last Name"
										className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
									/>
									<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
										<User size={20} weight="regular" />
									</span>
								</div>
							</div>
						</div>

						{/* Email */}
						<div className="w-full flex flex-col gap-1 justify-center">
							<label
								htmlFor="userEmail"
								className="text-heading text-sm"
							>
								Email
							</label>
							<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
								<input
									type="text"
									id="userEmail"
									value="abc@gmail.com"
									readOnly
									placeholder="Enter your Email Address"
									className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider cursor-no-drop"
								/>
								<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
									<EnvelopeSimple
										size={20}
										weight="regular"
									/>
								</span>
							</div>
						</div>

						{/* Job Title */}
						<div className="w-full flex flex-col gap-1 justify-center">
							<label
								htmlFor="userJobTitle"
								className="text-heading text-sm"
							>
								Job Title
							</label>
							<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
								<input
									type="text"
									id="userJobTitle"
									placeholder="Enter your Job Title"
									className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider "
								/>
								<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
									<Desktop size={20} weight="regular" />
								</span>
							</div>
						</div>

						{/* Bio */}
						<div className="w-full flex flex-col gap-1 justify-center">
							<label
								htmlFor="userBio"
								className="text-heading text-sm"
							>
								Bio
							</label>
							<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
								<input
									type="text"
									id="userBio"
									placeholder="Add your Bio"
									className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider "
								/>
								<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
									<IdentificationBadge
										size={20}
										weight="regular"
									/>
								</span>
							</div>
						</div>

						<CountrySelect />

						{/* Submit Button */}
						<button
							type="submit"
							className="bg-highlight text-white min-h-10 w-full rounded-md text-sm cursor-pointer font-semibold"
						>
							Update
						</button>
					</form>
				</>
			) : (
				<form className="flex-grow ml-12 flex flex-col gap-4 max-w-[500px] overflow-auto no-scrollbar pb-2">
					{/* Confirm Password */}
					<div className="w-full flex flex-col gap-1 justify-center">
						<label
							htmlFor="confirmPassword"
							className="text-heading text-sm"
						>
							Confirm Password
						</label>
						<div className="w-full relative text-heading">
							<input
								type={showPassword[0] ? "text" : "password"}
								id="confirmPassword"
								placeholder="Enter your Current Password"
								className="w-full border border-borderColor rounded-md bg-borderColor text-heading h-10 pl-4 pr-14 outline-none text-xs tracking-wider"
							/>
							<span
								onClick={() => {
									const arr = [...showPassword];
									arr[0] = !arr[0];
									setShowPassword(arr);
								}}
								className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
							>
								{showPassword[0] ? (
									<Eye size={20} weight="regular" />
								) : (
									<EyeClosed size={20} weight="regular" />
								)}
							</span>
						</div>
					</div>

					{/* New Password */}
					<div className="w-full flex flex-col gap-1 justify-center">
						<label
							htmlFor="newPassword"
							className="text-heading text-sm"
						>
							New Password
						</label>
						<div className="w-full relative text-heading">
							<input
								type={showPassword[1] ? "text" : "password"}
								id="newPassword"
								placeholder="Create a New Password (6+ Characters)"
								className="w-full border border-borderColor rounded-md bg-borderColor text-heading h-10 pl-4 pr-14 outline-none text-xs tracking-wider"
							/>
							<span
								onClick={() => {
									const arr = [...showPassword];
									arr[1] = !arr[1];
									setShowPassword(arr);
								}}
								className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
							>
								{showPassword[1] ? (
									<Eye size={20} weight="regular" />
								) : (
									<EyeClosed size={20} weight="regular" />
								)}
							</span>
						</div>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-highlight text-white min-h-10 w-full rounded-md text-sm cursor-pointer font-semibold"
					>
						Update
					</button>
				</form>
			)}
		</div>
	);
}

export default UpdateProfile;

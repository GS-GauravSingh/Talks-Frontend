import React from "react";
import user from "../assets/userImages/user_02.png";
import { Camera, IdCard, Mail, Monitor, User } from "lucide-react";
import { CountrySelect } from "../components";

function UpdateProfile() {
	return (
		<div className="flex-grow h-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-start overflow-auto gap-6 lg:gap-20 pb-4">
			{/* File Upload - For User Avatar */}
			<div className="flex flex-row lg:flex-col items-center gap-6">
				<div className="relative w-fit">
					<img
						src={user}
						alt="User Profile"
						className="object-center object-contain min-w-24 min-h-24"
					/>

					<label
						htmlFor="fileUpload"
						className="absolute right-0 bottom-0 text-white bg-highlight p-[5px] rounded-full cursor-pointer"
					>
						<Camera className="size-5" />
					</label>
					<input type="file" id="fileUpload" className="hidden" />
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-base lg:text-xl text-heading font-semibold whitespace-nowrap">
						Account Information
					</h3>
					<div className="flex flex-col gap-4 text-xs">
						<p className="flex items-center justify-between">
							<span>Member Since</span>
							<span className="text-green-500 font-medium">
								March, 2025
							</span>
						</p>
						<p className="flex items-center justify-between">
							<span>Account Status</span>
							<span className="text-green-500 font-medium">
								Active
							</span>
						</p>
					</div>
				</div>
			</div>

			{/* Profile Update Form */}
			<form action="" className="h-full w-full max-w-lg space-y-4 overflow-auto no-scrollbar">
				{/* First and Last Name */}
				<div className="flex flex-col gap-4 sm:flex-row">
					{/* First name */}
					<div className="w-full flex flex-col gap-1 justify-center">
						<label
							htmlFor="userFirstName"
							className="text-heading text-sm flex items-center gap-2"
						>
							<User className="size-4" />
							<span>Firstname</span>
						</label>

						<input
							type="text"
							id="userFirstName"
							placeholder="Enter your First Name"
							className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
						/>
					</div>

					{/* Last name */}
					<div className="w-full flex flex-col gap-1 justify-center">
						<label
							htmlFor="userLastName"
							className="text-heading text-sm flex items-center gap-2"
						>
							<User className="size-4" />
							<span>Lastname</span>
						</label>

						<input
							type="text"
							id="userLastName"
							placeholder="Enter your First Name"
							className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
						/>
					</div>
				</div>

				{/* Email */}
				<div className="w-full flex flex-col gap-1 justify-center">
					<label
						htmlFor="userEmail"
						className="text-heading text-sm flex items-center gap-2"
					>
						<Mail className="size-4" />
						<span>Email</span>
					</label>

					<input
						type="email"
						id="userEmail"
						value="abc@gmail.com"
						readOnly
						className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
					/>
				</div>

				{/* Job Title */}
				<div className="w-full flex flex-col gap-1 justify-center">
					<label
						htmlFor="userJobTitle"
						className="text-heading text-sm flex items-center gap-2"
					>
						<Monitor className="size-4" />
						<span>Job Title</span>
					</label>

					<input
						type="text"
						id="userJobTitle"
						placeholder="Add your Job Title"
						className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
					/>
				</div>

				{/* Bio*/}
				<div className="w-full flex flex-col gap-1 justify-center">
					<label
						htmlFor="userBio"
						className="text-heading text-sm flex items-center gap-2"
					>
						<IdCard className="size-4" />
						<span>Bio</span>
					</label>

					<input
						type="text"
						id="userBio"
						placeholder="Add your Bio"
						className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
					/>
				</div>

				<CountrySelect />

				{/* Submit Button */}
				<button
					type="submit"
					className="bg-highlight text-black min-h-10 w-full rounded-md text-sm cursor-pointer font-semibold"
				>
					Update
				</button>
			</form>
		</div>
	);
}

export default UpdateProfile;

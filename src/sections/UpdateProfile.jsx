import React, { useState } from "react";
import { Camera, IdCard, Mail, Monitor, User } from "lucide-react";
import { CountrySelect } from "../components";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar, updateUserProfileInfo } from "../utils/user.util";
import defaultUserAvatar from "../assets/defaultUserAvatar.png";
import formatAccountCreationTime from "../utils/formatAccountCreationTime.util";

function UpdateProfile() {
	const [selectedCountry, setSelectedCountry] = useState("");
	const { authUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [formData, setFormData] = useState(() => {
		return {
			firstname: authUser?.firstname,
			lastname: authUser?.lastname,
			jobTitle: authUser?.jobTitle ?? "",
			bio: authUser?.bio ?? "",
			country: authUser?.country ?? "",
		};
	});

	function handleFileUpload(event) {
		const file = event.target.files[0];
		if (!file.type.startsWith("image/")) {
			toast.error("Please select an image file");
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			dispatch(updateAvatar(reader.result)); // update avatar
		};
		reader.readAsDataURL(file);
	}

	function handleProfileInfoUpdate(event) {
		event.preventDefault();

		if (!formData.firstname) {
			toast.error("Firstname is required");
			return;
		}

		console.log(formData);
		dispatch(updateUserProfileInfo(formData));
	}

	return (
		<div className="flex-grow h-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-start overflow-auto no-scrollbar gap-6 lg:gap-20 pb-4">
			{/* File Upload - For User Avatar */}
			<div className="grid place-content-center md:grid-col-2 gap-6">
				<div className="relative w-fit mx-auto">
					<img
						src={
							authUser?.avatar
								? authUser?.avatar
								: defaultUserAvatar
						}
						alt="User Profile"
						className="object-center object-cover h-full w-full max-h-24 max-w-24 "
					/>

					<label
						htmlFor="fileUpload"
						className="absolute right-0 bottom-0 text-white bg-highlight p-[5px] rounded-full cursor-pointer"
					>
						<Camera className="size-5" />
					</label>
					<input
						type="file"
						id="fileUpload"
						className="hidden"
						onChange={handleFileUpload}
					/>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-base lg:text-xl text-heading font-semibold whitespace-nowrap mx-auto">
						Account Information
					</h3>
					<div className="flex flex-col gap-4 text-xs mx-auto">
						<p className="flex items-center justify-between gap-4">
							<span>Member Since</span>
							<span className="text-green-500 font-medium">
								{formatAccountCreationTime(authUser?.createdAt)}
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
			<form
				action=""
				className="h-full w-full max-w-lg space-y-4 md:overflow-auto no-scrollbar"
			>
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
							name="firstname"
							placeholder="Enter your First Name"
							value={formData?.firstname}
							className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
							onChange={(event) =>
								setFormData((prev) => {
									return {
										...prev,
										[event.target.name]: event.target.value,
									};
								})
							}
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
							name="lastname"
							placeholder="Enter your First Name"
							value={formData?.lastname}
							className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
							onChange={(event) =>
								setFormData((prev) => {
									return {
										...prev,
										[event.target.name]: event.target.value,
									};
								})
							}
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
						value={authUser?.email}
						readOnly
						className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4 cursor-default"
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
						name="jobTitle"
						placeholder="Add your Job Title"
						value={formData?.jobTitle}
						className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
						onChange={(event) =>
							setFormData((prev) => {
								return {
									...prev,
									[event.target.name]: event.target.value,
								};
							})
						}
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
						name="bio"
						placeholder="Add your Bio"
						value={formData?.bio}
						className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 px-4"
						onChange={(event) =>
							setFormData((prev) => {
								return {
									...prev,
									[event.target.name]: event.target.value,
								};
							})
						}
					/>
				</div>

				<CountrySelect
					selectedCountry={selectedCountry}
					setSelectedCountry={setSelectedCountry}
					formData={formData}
					setFormData={setFormData}
				/>

				{/* Submit Button */}
				<button
					type="submit"
					className="bg-highlight text-black min-h-10 w-full rounded-md text-sm cursor-pointer font-semibold focus:scale-95 transition-all duration-75 ease-linear"
					onClick={handleProfileInfoUpdate}
				>
					Update
				</button>
			</form>
		</div>
	);
}

export default UpdateProfile;

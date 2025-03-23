import {
	Eye,
	EyeClosed,
	IdCard,
	Lock,
	Mail,
	Monitor,
	User,
} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUserProfilePassword } from "../utils/user.util";

function UpdatePassword() {
	const [showPassword, setShowPassword] = useState(new Array(2).fill(false));
	const [formData, setFormData] = useState({});
	const dispatch = useDispatch();

	async function handleUpdatePassword(event) {
		event.preventDefault();
		if (!formData.currentPassword || !formData.newPassword) {
			toast.error("Both fields are required");
			return;
		}

		if (
			formData.currentPassword.length < 6 ||
			formData.newPassword.length < 6
		) {
			toast.error("Password must be atleast 6 characters");
			return;
		}

		console.log(formData);

		await dispatch(updateUserProfilePassword(formData));		
		setFormData({});
	}

	return (
		<div className="flex-grow h-full flex justify-center pb-4">
			{/* Update Password Form */}
			<form
				action=""
				className="h-full w-full max-w-lg space-y-4 overflow-auto no-scrollbar"
			>
				{/* Confirm Password */}
				<div className="w-full flex flex-col gap-1 justify-center">
					<label
						htmlFor="currentPassword"
						className="text-heading text-sm flex items-center gap-2"
					>
						<Lock className="size-4" />
						<span>Current Password</span>
					</label>

					<div className="relative w-full">
						<input
							type={showPassword[0] ? "text" : "password"}
							id="currentPassword"
							name="currentPassword"
							value={formData?.currentPassword ?? ""}
							placeholder="Enter current password"
							className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 pl-4 pr-14"
							onChange={(event) =>
								setFormData((prev) => {
									return {
										...prev,
										[event.target.name]: event.target.value,
									};
								})
							}
						/>

						{showPassword[0] ? (
							<Eye
								className="size-5 absolute right-4 top-1/2 -translate-y-1/2 text-heading cursor-pointer"
								onClick={() => {
									const arr = [...showPassword];
									arr[0] = !arr[0];
									setShowPassword(arr);
								}}
							/>
						) : (
							<EyeClosed
								className="size-5 absolute right-4 top-1/2 -translate-y-1/2 text-heading cursor-pointer"
								onClick={() => {
									const arr = [...showPassword];
									arr[0] = !arr[0];
									setShowPassword(arr);
								}}
							/>
						)}
					</div>
				</div>

				{/* New Password */}
				<div className="w-full flex flex-col gap-1 justify-center">
					<label
						htmlFor="newPassword"
						className="text-heading text-sm flex items-center gap-2"
					>
						<Lock className="size-4" />
						<span>New Password</span>
					</label>

					<div className="relative w-full">
						<input
							type={showPassword[1] ? "text" : "password"}
							id="newPassword"
							name="newPassword"
							value={formData?.newPassword ?? ""}
							placeholder="Create a new password (6+ characters)"
							className="w-full outline-none text-xs tracking-wider border border-borderColor rounded-md bg-borderColor text-heading h-10 pl-4 pr-14"
							onChange={(event) =>
								setFormData((prev) => {
									return {
										...prev,
										[event.target.name]: event.target.value,
									};
								})
							}
						/>

						{showPassword[1] ? (
							<Eye
								className="size-5 absolute right-4 top-1/2 -translate-y-1/2 text-heading cursor-pointer"
								onClick={() => {
									const arr = [...showPassword];
									arr[1] = !arr[1];
									setShowPassword(arr);
								}}
							/>
						) : (
							<EyeClosed
								className="size-5 absolute right-4 top-1/2 -translate-y-1/2 text-heading cursor-pointer"
								onClick={() => {
									const arr = [...showPassword];
									arr[1] = !arr[1];
									setShowPassword(arr);
								}}
							/>
						)}
					</div>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="bg-highlight text-black min-h-10 w-full rounded-md text-sm cursor-pointer font-semibold focus:scale-95 transition-all duration-75 ease-linear"
					onClick={handleUpdatePassword}
				>
					Update
				</button>
			</form>
		</div>
	);
}

export default UpdatePassword;

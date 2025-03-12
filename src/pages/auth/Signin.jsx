import {
	Envelope,
	Eye,
	EyeClosed,
	LockSimple,
	User,
} from "@phosphor-icons/react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import { Link } from "react-router";

function Signin() {
	const [showPassword, setShowPassword] = useState(false);
	function toggleShowPassword() {
		setShowPassword((prev) => !prev);
	}
	return (
		<div className="h-screen w-full flex items-center justify-center px-4 py-4">
			<div className="w-full max-w-[500px] border border-borderColor rounded-md px-4 py-4 space-y-6">
				<div className="flex flex-col mb-14">
					<h3 className="text-heading text-2xl">Talks</h3>
					<p className="text-xs whitespace-nowrap">
						Real-time, Real Conversations.
					</p>
				</div>

				<div className="flex flex-col items-center">
					<h3 className="text-heading text-2xl">
						<User size={40} weight="regular" />
					</h3>
					<p className="text-xs text-center">
						<span className="">Your chats are waiting </span>
						<span className="whitespace-nowrap">— sign in now.</span>
					</p>
				</div>

				{/* Sign-In Form */}
				<form className="flex flex-col justify-center gap-4">
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
								placeholder="Enter your Registered Email Address"
								className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
							/>
							<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
								<EnvelopeSimple size={20} weight="regular" />
							</span>
						</div>
					</div>

					{/* Password */}
					<div className="w-full flex flex-col gap-1 justify-center">
						<label
							htmlFor="userPassword"
							className="text-heading text-sm"
						>
							Password
						</label>
						<div className="w-full relative text-heading">
							<input
								type={showPassword ? "text" : "password"}
								id="userPassword"
								placeholder="Enter your Account Password"
								className="w-full border border-borderColor rounded-md bg-borderColor text-heading h-10 pl-4 pr-14 outline-none text-xs tracking-wider"
							/>
							<span
								onClick={toggleShowPassword}
								className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
							>
								{showPassword ? (
									<Eye size={20} weight="regular" />
								) : (
									<EyeClosed size={20} weight="regular" />
								)}
							</span>
						</div>
					</div>

					{/* Sign Up - Didn't have any account? */}
					<p className="text-xs text-center">
						Didn't have any account?{" "}
						<Link
							to="/auth/signup"
							className="text-highlight font-medium"
						>
							Sign Up
						</Link>
					</p>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-highlight text-white h-10 w-full rounded-md text-sm cursor-pointer font-semibold"
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}

export default Signin;

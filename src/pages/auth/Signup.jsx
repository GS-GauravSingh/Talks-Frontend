import { Envelope, LockSimple, User } from "@phosphor-icons/react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Link } from "react-router";

function Signup() {
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
						<span className="">Create an account, </span>
						<span className="whitespace-nowrap">
							spark a conversation!
						</span>
					</p>
				</div>

				{/* Sign-Up Form */}
				<form className="flex flex-col justify-center gap-4">
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
								placeholder="Enter your Email Address"
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
						<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
							<input
								type="text"
								id="userPassword"
								placeholder="Create a New Password (6+ Characters)"
								className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
							/>
							<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
								<LockSimple size={20} weight="regular" />
							</span>
						</div>
					</div>

					{/* Sign In - Already have any account? */}
					<p className="text-xs text-center">
						Already have any account?{" "}
						<Link to="/auth/signin" className="text-highlight font-medium">
							Sign In
						</Link>
					</p>

					{/* Submit Button */}
					<button type="submit" className="bg-highlight text-white h-10 w-full rounded-md text-sm cursor-pointer font-semibold">
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Signup;

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
import { z } from "zod"; // `z` is the core object from Zod that helps define and validate schemas.
import { zodResolver } from "@hookform/resolvers/zod"; // `zodResolver` connects Zod with React Hook Form, so React Hook Form can use the Zod schema for validation.
import { useForm } from "react-hook-form";

function Signin() {
	// Creating Schema
	// Zod is a schema based validation library.
	// Instead of defining validation rules in multiple places (register for each input), you define a single validation schema using Zod.

	// `z.object()` is used to define an object schema.
	const signinSchema = z.object({
		// In Zod, all fields are required by default unless explicitly marked as `.optional()`.

		email: z.string().email("Please provide a valid email address."),

		password: z
			.string("Password is required!")
			.min(6, "Password must be at least 6 characters."),
	});

	// React Hook Form
	const {
		register, // `register` is a function provided by the `useForm` hook. We can assign it to each input field so that the react-hook-form can track the changes for the input field value
		handleSubmit, // `handleSubmit` is the function we can call when the form is submitted
		formState: { errors }, // the `formState` object contains various properties that help track the form's state. It provides details about errors, touched fields, dirty fields, submission status, etc.
		reset, // `reset` is a function provided by the `useForm` hook to clear the form fields and reset errors to their default state.
	} = useForm({
		resolver:
			zodResolver(
				signinSchema
			) /* Attaching Zod Validation, so that react hook form uses zod schema for validations. */,
	});

	const [showPassword, setShowPassword] = useState(false);
	function toggleShowPassword() {
		setShowPassword((prev) => !prev);
	}

	function onSubmit(data) {
		console.log(data);
	}
	return (
		<div className="min-h-screen w-full flex items-center justify-center px-4 py-4">
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
						<span className="whitespace-nowrap">
							— sign in now.
						</span>
					</p>
				</div>

				{/* Sign-In Form */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center gap-4"
				>
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
								{...register("email")}
							/>
							<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
								<EnvelopeSimple size={20} weight="regular" />
							</span>
						</div>

						{/* Display error message if 'email' has an error */}
						{errors.email && (
							<p className="text-xs text-red-700">
								{errors.email.message}
							</p>
						)}
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
								{...register("password")}
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

						{/* Display error message if 'password' has an error */}
						{errors.password && (
							<p className="text-xs text-red-700">
								{errors.password.message}
							</p>
						)}
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

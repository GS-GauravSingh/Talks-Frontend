import { Envelope, LockSimple, User } from "@phosphor-icons/react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod"; // `z` is the core object from Zod that helps define and validate schemas.
import { zodResolver } from "@hookform/resolvers/zod"; // `zodResolver` connects Zod with React Hook Form, so React Hook Form can use the Zod schema for validation.

function Signup() {
	// Creating Schema
	// Zod is a schema based validation library.
	// Instead of defining validation rules in multiple places (register for each input), you define a single validation schema using Zod.

	// `z.object()` is used to define an object schema.
	const signupSchema = z
		.object({
			// In Zod, all fields are required by default unless explicitly marked as `.optional()`.
			firstname: z
				.string()
				.min(2, "Firstname must be at least 2 characters.")
				.max(50, "Firstname cannot exceed 50 characters.")
				.regex(/^[A-Za-z]+$/, "Only letters allowed."),

			lastname: z
				.string()
				.optional()
				.refine((val) => !val || /^[A-Za-z]+$/.test(val), {
					message: "Only letters allowed.",
				}),

			email: z.string().email("Please provide a valid email address."),

			password: z
				.string("Password is required!")
				.min(6, "Password must be at least 6 characters."),

			confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters."),
		})

		// zod allows us to write custom validation logic via `.refine()`.
		// It takes a function that returns true (valid) or false (invalid). If invalid, it can return a custom error message.
		// Also, You can chain multiple `.refine()` methods on a Zod schema.
		.refine((data) => data.password === data.confirmPassword, {
			message: "Passwords do not match", // custome error message
			path: ["confirmPassword"], // Attach error to `confirmPassword`, it specifies on which field an error has occured.
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
				signupSchema
			) /* Attaching Zod Validation, so that react hook form uses zod schema for validations. */,
	});

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
						<span className="">Create an account, </span>
						<span className="whitespace-nowrap">
							spark a conversation!
						</span>
					</p>
				</div>

				{/* Sign-Up Form */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center gap-4"
				>
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
								{...register("firstname")}
							/>
							<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
								<User size={20} weight="regular" />
							</span>
						</div>

						{/* Display error message if 'firstname' has an error */}
						{errors.firstname && (
							<p className="text-xs text-red-700">
								{errors.firstname.message}
							</p>
						)}
					</div>

					{/* Last name (Optional) */}
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
								placeholder="Enter your Last Name (Optional)"
								className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
								{...register("lastname")}
							/>
							<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
								<User size={20} weight="regular" />
							</span>
						</div>
						{/* Display error message if 'lastname' has an error */}
						{errors.lastname && (
							<p className="text-xs text-red-700">
								{errors.lastname.message}
							</p>
						)}
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
						<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
							<input
								type="text"
								id="userPassword"
								placeholder="Create a New Password (6+ Characters)"
								className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
								{...register("password")}
							/>
							<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
								<LockSimple size={20} weight="regular" />
							</span>
						</div>
						{/* Display error message if 'password' has an error */}
						{errors.password && (
							<p className="text-xs text-red-700">
								{errors.password.message}
							</p>
						)}
					</div>

					{/* Confirm Password */}
					<div className="w-full flex flex-col gap-1 justify-center">
						<label
							htmlFor="userConfirmPassword"
							className="text-heading text-sm"
						>
							Confirm Password
						</label>
						<div className="w-full relative border border-borderColor rounded-md bg-borderColor text-heading h-10">
							<input
								type="text"
								id="userConfirmPassword"
								placeholder="Re-type the newly created password"
								className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
								{...register("confirmPassword")}
							/>
							<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
								<LockSimple size={20} weight="regular" />
							</span>
						</div>
						{/* Display error message if 'password' has an error */}
						{errors.confirmPassword && (
							<p className="text-xs text-red-700">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					{/* Sign In - Already have any account? */}
					<p className="text-xs text-center">
						Already have any account?{" "}
						<Link
							to="/auth/signin"
							className="text-highlight font-medium"
						>
							Sign In
						</Link>
					</p>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-highlight text-white h-10 w-full rounded-md text-sm cursor-pointer font-semibold"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Signup;

import { Envelope, LockSimple, User } from "@phosphor-icons/react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod"; // `z` is the core object from Zod that helps define and validate schemas.
import { zodResolver } from "@hookform/resolvers/zod"; // `zodResolver` connects Zod with React Hook Form, so React Hook Form can use the Zod schema for validation.
import AuthImagePattern from "../../components/AuthImagePattern";
import toast from "react-hot-toast";
import { TbMessages } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../utils/auth.util";

function Signup() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { authLoading } = useSelector((state) => state.auth);

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

			confirmPassword: z
				.string()
				.min(6, "Confirm Password must be at least 6 characters."),
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

	// function to handle user registration.
	async function onSubmit(data) {
		try {
			const response = await dispatch(registerUser(data));
			if (response?.status === 200) {
				navigate("/auth/verify");
				reset(); // reset the form fileds.
			}
		} catch (error) {
			console.log(error);
		}
	}

	// Form validation Error - Displaying as Toast Errors.
	useEffect(() => {
		if (errors.firstname) {
			toast.error(errors.firstname.message);
		}
		if (errors.lastname) {
			toast.error(errors.lastname.message);
		}
		if (errors.email) {
			toast.error(errors.email.message);
		}
		if (errors.password) {
			toast.error(errors.password.message);
		}
		if (errors.confirmPassword) {
			toast.error(errors.confirmPassword.message);
		}
	}, [errors]);

	return (
		<div className="min-h-screen flex flex-col">
			{/* Header */}
			<div className=" p-4 sticky top-0 z-50 backdrop-blur-md">
				<div className="flex items-center gap-4">
					<span className="text-4xl border p-2 rounded-md border-borderColor hover:text-black hover:bg-highlight hover:border-highlight transition-all duration-75 ease-in">
						<TbMessages />
					</span>

					<div className="flex flex-col">
						<h3 className="text-heading font-semibold text-xl">
							Talks
						</h3>
						<p className="text-xs whitespace-nowrap">
							Real-time, Real Conversations.
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-grow grid grid-rows-1 grid-cols-1 lg:grid-cols-2">
				{/* Left Side */}
				<div className="p-4 space-y-6 flex items-center justify-center">
					<div className="w-full max-w-lg space-y-8">
						<div className="flex flex-col items-center">
							<h3 className="text-heading text-2xl">
								<User size={40} weight="bold" />
							</h3>
							<p className="text-heading text-xl font-semibold mt-4">
								Create Account
							</p>
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
							{/* First and Last Name */}
							<div className="flex flex-col gap-4 sm:flex-row">
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
											placeholder="John"
											className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
											disabled={authLoading}
											{...register("firstname")}
										/>
										<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
											<User size={20} weight="regular" />
										</span>
									</div>
								</div>

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
											placeholder="Doe"
											className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
											disabled={authLoading}
											{...register("lastname")}
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
										placeholder="johndoe@example.com"
										className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
										disabled={authLoading}
										{...register("email")}
									/>
									<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
										<EnvelopeSimple
											size={20}
											weight="regular"
										/>
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
										placeholder="Create a strong Password (at least 6 Characters)"
										className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
										disabled={authLoading}
										{...register("password")}
									/>
									<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
										<LockSimple
											size={20}
											weight="regular"
										/>
									</span>
								</div>
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
										placeholder="Type your password again"
										className="absolute left-0 z-50 w-full rounded-md h-full pl-4 pr-14 outline-none text-xs tracking-wider"
										disabled={authLoading}
										{...register("confirmPassword")}
									/>
									<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0">
										<LockSimple
											size={20}
											weight="regular"
										/>
									</span>
								</div>
							</div>

							{/* Sign In - Already have any account? */}
							<p className="text-xs text-center">
								Already have any account?{" "}
								<Link
									to={`${authLoading ? "" : "/auth/signin"}`}
									className={`text-highlight font-medium ${authLoading ? "cursor-no-drop" : ""}`}
								>
									Sign In
								</Link>
							</p>

							{/* Submit Button */}
							<button
								type="submit"
								className="bg-highlight text-black h-10 w-full rounded-md text-sm cursor-pointer font-semibold active:scale-95 transition-all duration-75 ease-in"
							>
								{authLoading ? "Loading..." : "Register"}
							</button>
						</form>
					</div>
				</div>

				{/* Right Side */}
				<AuthImagePattern
					title="Join our community"
					subtitle="Join now to connect with friends, share your favorite moments, and stay close to the people who matter most."
				/>
			</div>
		</div>
	);
}

export default Signup;

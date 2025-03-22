import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { z } from "zod"; // `z` is the core object from Zod that helps define and validate schemas.
import { zodResolver } from "@hookform/resolvers/zod"; // `zodResolver` connects Zod with React Hook Form, so React Hook Form can use the Zod schema for validation.
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthImagePattern } from "../../components";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../utils/auth.util";
import { User, Mail, Eye, EyeClosed, Loader } from "lucide-react";

function Signin() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { authLoading } = useSelector((state) => state.auth);

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

	// Function to handle user login process.
	async function onSubmit(data) {
		try {
			const response = await dispatch(loginUser(data));
			if (response?.status === 200) {
				navigate("/dashboard");
				reset(); // reset the form fileds.
			}
		} catch (error) {
			console.log(error);
		}
	}

	// Form validation Error - Displaying as Toast Errors.
	useEffect(() => {
		if (errors.email) {
			toast.error(errors.email.message);
		}
		if (errors.password) {
			toast.error(errors.password.message);
		}
	}, [errors]);
	return (
		<div className="pt-12 min-h-screen grid grid-rows-1 grid-cols-1 lg:grid-cols-2">
			{/* Left Side */}
			<div className="p-4 space-y-6 flex items-center justify-center">
				<div className="w-full max-w-lg space-y-8">
					<div className="flex flex-col items-center">
						<User className="text-heading size-8" />

						<p className="text-heading text-xl font-semibold mt-2">
							Welcome Back
						</p>
						<p className="text-xs text-center whitespace-nowrap">
							Sign in to Continue
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
									disabled={authLoading}
									{...register("email")}
								/>

								<Mail className="size-5 flex items-center absolute right-4 top-1/2 -translate-y-1/2 z-0 " />
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
									disabled={authLoading}
									{...register("password")}
								/>
								<span
									onClick={toggleShowPassword}
									className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
								>
									{showPassword ? (
										<Eye className="size-5" />
									) : (
										<EyeClosed className="size-5" />
									)}
								</span>
							</div>
						</div>

						{/* Sign Up - Didn't have any account? */}
						<p className="text-xs text-center">
							Didn't have any account?{" "}
							<Link
								to={`${authLoading ? "" : "/auth/signup"}`}
								className="text-highlight font-medium"
							>
								Sign Up
							</Link>
						</p>

						{/* Submit Button */}
						<button
							type="submit"
							className="bg-highlight text-black h-10 w-full rounded-md text-sm cursor-pointer font-semibold active:scale-95 transition-all duration-75 ease-in flex items-center justify-center"
							disabled={authLoading}
						>
							{authLoading ? (
								<Loader className="size-6 animate-spin" />
							) : (
								"Sign In"
							)}
						</button>
					</form>
				</div>
			</div>

			{/* Right Side */}
			<AuthImagePattern
				title="Welcome Back!"
				subtitle="Stay connected with those who matter — log in to check messages, reply to chats, and never miss a moment."
			/>
		</div>
	);
}

export default Signin;

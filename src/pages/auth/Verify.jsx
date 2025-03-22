import React, { useEffect, useRef, useState } from "react";
import { AuthImagePattern } from "../../components";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resendOTP, verifyOTP } from "../../utils/auth.util";
import { Loader, User } from "lucide-react";

function Verify() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { authLoading } = useSelector((state) => state.auth);

	const inpuRef = useRef([]);
	const [otp, setOtp] = useState(new Array(4).fill(""));
	const [combinedOTP, setCombinedOTP] = useState("");
	const [timeLeft, setTimeLeft] = useState(2 * 60); // 2 * 60 = 120 seconds, 2 minutes (in seconds). Once generated, the OTP will expire in 2 minutes.
	const [showResendButton, setShowResendButton] = useState(false);
	let minutes = Math.floor(timeLeft / 60);
	let seconds = timeLeft % 60;

	useEffect(() => {
		// stop the timer.
		if (timeLeft <= 0) {
			setShowResendButton(true);
			return;
		}

		const intervalId = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timeLeft]);

	function handleOnChange(event, index) {
		const value = event.target.value;
		if (isNaN(value)) {
			return;
		}

		const newOtp = [...otp];
		newOtp[index] = value.substring(value.length - 1);
		setOtp(newOtp);

		if (value && index < inpuRef.current.length - 1) {
			// move focus to next input field.
			inpuRef.current[index + 1].focus();
		}

		// Combined OTP
		const combinedOTP = newOtp.join("");
		if (combinedOTP.length === 4) {
			setCombinedOTP(combinedOTP);
		}
	}

	function handleOnClick(index) {
		inpuRef.current[index].setSelectionRange(1, 1);
	}
	function handleOnKeyDown(event, index) {
		if (
			event.key === "Backspace" &&
			index > 0 &&
			!otp[index] &&
			inpuRef.current[index - 1]
		) {
			// move focus to prev input field.
			inpuRef.current[index - 1].focus();
		}
	}

	// Function to handle OTP Verification process.
	async function handleSubmit(event) {
		event.preventDefault();

		// Take out the user email from the session storage.
		const email = sessionStorage.getItem("userEmail");

		try {
			const response = await dispatch(
				verifyOTP({ email, otp: combinedOTP })
			);
			if (response?.status === 201) {
				navigate("/dashboard");
			}
		} catch (error) {
			console.log(error);
		}
	}

	async function handleResendOTP(event) {
		event.preventDefault();

		try {
			// Take out the user email from the session storage.
			const email = sessionStorage.getItem("userEmail");
			await dispatch(resendOTP({ email }));

			// restart the time of 2 minutes.
			setTimeLeft(2 * 60);
			setShowResendButton(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="pt-12 min-h-screen grid grid-rows-1 grid-cols-1 lg:grid-cols-2">
			{/* Left Side */}
			<div className="p-4 space-y-6 flex items-center justify-center">
				<div className="w-full max-w-lg space-y-8">
					<div className="flex flex-col items-center">

						<User className="text-heading size-8" />

						<p className="text-heading text-xl font-semibold mt-2">
							Verify Your Account
						</p>
						<p className="text-xs text-center">
							<span className="">Your security, </span>
							<span className="whitespace-nowrap">
								our priority — verify now!
							</span>
						</p>
					</div>

					{/* OTP Verification Form */}
					<form
						onSubmit={handleSubmit}
						className="flex flex-col justify-center gap-4"
					>
						<p className="text-heading text-sm text-center">
							Enter the 4-digit OTP sent to your registered email
							address.
						</p>

						{/* OTP Input Fields */}
						<div className="grid grid-cols-4 grid-row-1 gap-4">
							{otp.map((value, index) => {
								return (
									<input
										ref={
											// we can fire a callback inside a `ref` attribute, this is called as `callback ref`.
											(inputElement) => {
												inpuRef.current[index] =
													inputElement;
											}
										}
										type="text"
										value={value}
										key={index}
										required
										className="h-10 border border-borderColor rounded-md bg-borderColor text-heading text-xs text-center outline-none"
										disabled={authLoading}
										onChange={(event) =>
											handleOnChange(event, index)
										}
										onClick={() => handleOnClick(index)}
										onKeyDown={(event) =>
											handleOnKeyDown(event, index)
										}
									/>
								);
							})}
						</div>

						{/* Resend OTP */}
						<p className="text-xs text-center flex flex-col gap-2">
							{showResendButton ? (
								<button
									className="text-highlight cursor-pointer"
									onClick={handleResendOTP}
									disabled={authLoading}
								>
									Resend OTP ?
								</button>
							) : (
								<span className="">
									Verification code expires in:{" "}
									<span className="text-highlight">
										{minutes}:{seconds < 10 ? "0" : ""}
										{seconds}.
									</span>
								</span>
							)}
							<span className="text-red-500">
								Do not share the verification code with anyone.
							</span>
						</p>

						{/* Submit Button */}
						<button
							type="submit"
							className="bg-highlight text-black h-10 w-full rounded-md text-sm cursor-pointer font-semibold active:scale-95 transition-all duration-75 ease-in flex items-center justify-center"
							disabled={authLoading}
						>
							{
								authLoading ? <Loader className="size-6 animate-spin" /> : "Verify"
							}
						</button>
					</form>
				</div>
			</div>

			{/* Right Side */}
			<AuthImagePattern
				title="Verify Your Account"
				subtitle="One step away! Enter the OTP to secure your account and proceed."
			/>
		</div>
	);
}

export default Verify;

import { User } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";

function Verify() {
	const inpuRef = useRef([]);
	const [otp, setOtp] = useState(new Array(4).fill(""));
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

	function handleResendOTP(event) {
		event.preventDefault();

		// restart the time of 2 minutes.
		setTimeLeft(2 * 60);
		setShowResendButton(false);
	}

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
			console.log(combinedOTP);
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
						<span className="">Your security, </span>
						<span className="whitespace-nowrap">
							our priority — verify now!
						</span>
					</p>
				</div>

				{/* OTP Verification Form */}
				<form className="flex flex-col justify-center gap-4">
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
									className="h-10 border border-borderColor rounded-md bg-borderColor text-heading text-xs text-center outline-none"
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
						className="bg-highlight text-white h-10 w-full rounded-md text-sm cursor-pointer font-semibold"
					>
						Verify
					</button>
				</form>
			</div>
		</div>
	);
}

export default Verify;

import React from "react";
import commonStyles from "../../commonStyles";
import signupSvg from "../../assets/SVGs/signup.svg";
import googleIconSvg from "../../assets/SVGs/google-icon.svg";
import { EnvelopeSimple, LockSimple, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div
            className={`${commonStyles.background} h-screen w-full flex items-center justify-center overflow-hidden`}
        >
            <div
                className={`w-full h-full flex flex-row items-center gap-4 max-w-screen-2xl`}
            >
                <div className="w-full hidden md:flex items-center flex-grow justify-center px-4 py-4">
                    <img
                        src={signupSvg}
                        alt="Signup SVG"
                        className="h-auto max-w-[500px] "
                    />
                </div>

                <div className="w-full h-full flex flex-col items-center justify-center px-4 py-4 space-y-4">
                    <div className="flex-grow flex flex-col justify-end w-full cursor-default">
                        <h3 className="text-xl text-gunmetalGray dark:text-white">
                            Sign Up to Talks
                        </h3>
                        <p className="text-xs">
                            Connect Instantly, Talk Freely.
                        </p>
                    </div>

                    <form action="" className="flex-grow overflow-scroll no-scrollbar w-full space-y-4">
                        {/* Name */}
                        <div className={`flex flex-col justify-start gap-1`}>
                            <label
                                htmlFor=""
                                className="text-gunmetalGray dark:text-white font-medium tracking-wide"
                            >
                                Name
                            </label>

                            <div className="relative group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter full name"
                                    className={`${commonStyles.inputBackground} w-full rounded-lg h-10 pl-4 pr-14 text-gunmetalGray dark:text-white text-xs tracking-wide outline-none border border-transparent group-focus-within:border-darkCyan`}
                                />

                                <span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 text-gunmetalGray dark:text-white group-focus-within:text-darkCyan">
                                    <User size={20} weight="regular" />
                                </span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className={`flex flex-col justify-start gap-1`}>
                            <label
                                htmlFor=""
                                className="text-gunmetalGray dark:text-white font-medium tracking-wide"
                            >
                                Email
                            </label>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email"
                                    className={`${commonStyles.inputBackground} w-full rounded-lg h-10 pl-4 pr-14 text-gunmetalGray dark:text-white text-xs tracking-wide outline-none border border-transparent group-focus-within:border-darkCyan`}
                                />

                                <span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 text-gunmetalGray dark:text-white group-focus-within:text-darkCyan">
                                    <EnvelopeSimple
                                        size={20}
                                        weight="regular"
                                    />
                                </span>
                            </div>
                        </div>

                        {/* Password */}
                        <div className={`flex flex-col justify-start gap-1`}>
                            <label
                                htmlFor=""
                                className="text-gunmetalGray dark:text-white font-medium tracking-wide"
                            >
                                Password
                            </label>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Create a new password"
                                    className={`${commonStyles.inputBackground} w-full rounded-lg h-10 pl-4 pr-14 text-gunmetalGray dark:text-white text-xs tracking-wide outline-none border border-transparent group-focus-within:border-darkCyan`}
                                />

                                <span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 text-gunmetalGray dark:text-white group-focus-within:text-darkCyan">
                                    <LockSimple size={20} weight="regular" />
                                </span>
                            </div>
                        </div>

                        {/* Re-Type Password */}
                        <div className={`flex flex-col justify-start gap-1`}>
                            <label
                                htmlFor=""
                                className="text-gunmetalGray dark:text-white font-medium tracking-wide"
                            >
                                Re-type Password
                            </label>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Re-type the newly created password"
                                    className={`${commonStyles.inputBackground} w-full rounded-lg h-10 pl-4 pr-14 text-gunmetalGray dark:text-white text-xs tracking-wide outline-none border border-transparent group-focus-within:border-darkCyan`}
                                />

                                <span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 text-gunmetalGray dark:text-white group-focus-within:text-darkCyan">
                                    <LockSimple size={20} weight="regular" />
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col space-y-4">
                            <button className="text-sm w-full bg-darkCyan h-10 text-white font-medium tracking-wide rounded-lg hover:opacity-90">
                                Sign Up
                            </button>

                            {/* Separator */}
                            <div className="flex flex-row items-center gap-4 cursor-default">
                                <span
                                    className={`${commonStyles.inputBackground} h-[2px] flex-grow`}
                                ></span>
                                <span className="text-xs">Or</span>
                                <span
                                    className={`${commonStyles.inputBackground} h-[2px] flex-grow`}
                                ></span>
                            </div>

                            <button
                                className={`${commonStyles.inputBackground} text-sm w-full h-10 font-medium tracking-wide rounded-lg flex items-center justify-center gap-2 text-gunmetalGray dark:text-white hover:opacity-90`}
                            >
                                <img
                                    src={googleIconSvg}
                                    alt=""
                                    className="w-5 h-5"
                                />
                                <span>Sign Up with Google</span>
                            </button>

                            {/* Already have an account */}
                            <button className="flex text-xs w-full items-center justify-center ">
                                <p>Already have an account?&nbsp;</p>
                                <Link to="/auth/signin" className="text-darkCyan underline hover:opacity-90">Sign In</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

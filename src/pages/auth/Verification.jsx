import React from "react";
import commonStyles from "../../commonStyles";

function Verification() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-smokyBlack">
            <div className={`w-full flex flex-col items-center gap-4 max-w-96`}>
                <div className="text-center">
                    <h3 className="text-gunmetalGray dark:text-white text-lg font-semibold">
                        Verify Your Account
                    </h3>
                    <p className="text-sm">
                        Enter a 6 digit code sent to the registered email
                        address.
                    </p>
                </div>

                <div className="">
                    <input
                        type="text"
                        name=""
                        id=""
                        className={`${commonStyles.inputBackground} rounded-lg text-center px-4 h-10 outline-none border border-transparent focus-within:border-darkCyan max-w-80 text-xs text-gunmetalGray dark:text-white tracking-wide`}
                    />
                </div>

                <div className="text-center space-y-2">
                    <p className="text-sm">
                        <span>Didn't received a code?&nbsp;</span>
                        <button className="text-darkCyan hover:opacity-90">
                            Resend
                        </button>
                    </p>

                    <button className="bg-darkCyan w-full text-white rounded-lg h-10 text-sm font-medium hover:opacity-90">
                        Verify
                    </button>

                    <p className="text-sm text-red-600 cursor-default">
                        Don't share the verification code with anyone!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Verification;

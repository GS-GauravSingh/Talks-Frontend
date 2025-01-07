import React, { useState } from "react";
import user from "../assets/userImages/user_04.png";
import commonStyles from "../commonStyles";
import { Camera } from "@phosphor-icons/react";
import { CountrySelect } from "../components";

function UpdateProfile() {
    const [openTab, setOpenTab] = useState(0);
    const navigation = [
        {
            title: "Profile",
        },

        {
            title: "Update Password",
        },
    ];

    return (
        <div className="h-full w-full flex flex-col overflow-hidden">
            {/* Navigation Menu */}
            <div
                className={`${commonStyles.borderBottom} flex flex-row gap-10 px-10`}
            >
                {/* JavaScript */}
                {navigation.map(function (obj, index) {
                    return (
                        <div key={index} className="pt-8 pb-5 relative">
                            <button
                                className="text-black dark:text-white text-sm"
                                onClick={function (event) {
                                    event.preventDefault();
                                    setOpenTab(index);
                                }}
                            >
                                {obj.title}
                            </button>

                            <span
                                className={`${
                                    openTab === index ? "block" : "hidden"
                                } absolute bottom-[-1px] left-0 w-full h-[1px] rounded-md bg-darkCyan`}
                            ></span>
                        </div>
                    );
                })}
            </div>

            {/* Content for Tabs */}
            {/* Profile Update Form */}
            <div
                className={`${
                    openTab === 0 ? "flex" : "hidden"
                } h-full overflow-auto no-scrollbar flex-col gap-8 pl-10 py-4`}
            >
                {/* Image upload */}
                <div className="flex relative max-w-fit">
                    <img
                        src={user}
                        alt="Profile"
                        className="h-20 w-20 object-cover object-center"
                    />

                    <label
                        htmlFor="profilePhotoUpload"
                        className={`flex items-center justify-center absolute -right-1 -bottom-1 bg-darkCyan rounded-full text-white p-[0.3rem] cursor-pointer hover:opacity-90 z-50`}
                    >
                        <Camera size={18} weight="regular" />
                    </label>
                    <input
                        type="file"
                        name=""
                        id="profilePhotoUpload"
                        className="hidden"
                    />
                </div>

                {/* Form */}
                <form
                    action=""
                    className={`${commonStyles.border} h-full overflow-auto no-scrollbar flex flex-col gap-4 rounded-lg max-w-96 px-4 py-4`}
                >
                    {/* Name */}
                    <div className="flex flex-col gap-1 group">
                        <label
                            htmlFor=""
                            className="text-sm text-gunmetalGray dark:text-white group-focus-within:text-darkCyan"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your name"
                            className={`${commonStyles.inputBackground} px-4 rounded-lg text-xs h-10 text-gunmetalGray dark:text-white outline-none border border-transparent group-focus-within:border-darkCyan tracking-wide`}
                        />
                    </div>

                    {/* Job Title */}
                    <div className="flex flex-col gap-1 group">
                        <label
                            htmlFor=""
                            className="text-sm text-gunmetalGray dark:text-white group-focus-within:text-darkCyan"
                        >
                            Job Title
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your job title"
                            className={`${commonStyles.inputBackground} px-4 rounded-lg text-xs h-10 text-gunmetalGray dark:text-white outline-none border border-transparent group-focus-within:border-darkCyan tracking-wide`}
                        />
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col gap-1 group">
                        <label
                            htmlFor=""
                            className="text-sm text-gunmetalGray dark:text-white group-focus-within:text-darkCyan"
                        >
                            Bio
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Add your Bio"
                            className={`${commonStyles.inputBackground} px-4 rounded-lg text-xs h-10 text-gunmetalGray dark:text-white outline-none border border-transparent group-focus-within:border-darkCyan tracking-wide`}
                        />
                    </div>

                    {/* Country Select Component */}
                    <CountrySelect />

                    {/* Dummy Container - Just to occupy extra space */}
                    <div className="flex-grow"></div>

                    {/* Submit Button */}
                    <div className="flex flex-col gap-4">
                        <button className="text-sm bg-darkCyan text-white rounded-lg font-medium h-10">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Password Update Form */}
            <div
                className={`${
                    openTab === 1 ? "flex" : "hidden"
                } flex-col gap-4 pl-10 pb-4 pt-4 h-full`}
            >
                {/* Form */}
                <form
                    action=""
                    className={`${commonStyles.border} flex flex-col gap-4 rounded-lg h-full overflow-auto no-scrollbar max-w-96 px-4 py-4`}
                >
                    {/* Current Password */}
                    <div className="flex flex-col gap-1 group">
                        <label
                            htmlFor=""
                            className="text-sm text-gunmetalGray dark:text-white group-focus-within:text-darkCyan"
                        >
                            Current Password
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your password"
                            className={`${commonStyles.inputBackground} px-4 rounded-lg text-xs h-10 text-gunmetalGray dark:text-white outline-none border border-transparent group-focus-within:border-darkCyan tracking-wide`}
                        />
                    </div>

                    {/* New Password */}
                    <div className="flex flex-col gap-1 group">
                        <label
                            htmlFor=""
                            className="text-sm text-gunmetalGray dark:text-white group-focus-within:text-darkCyan"
                        >
                            New Password
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter new password"
                            className={`${commonStyles.inputBackground} px-4 rounded-lg text-xs h-10 text-gunmetalGray dark:text-white outline-none border border-transparent group-focus-within:border-darkCyan tracking-wide`}
                        />
                    </div>

                    {/* Dummy Container - Just to occupy extra space */}
                    <div className="flex-grow"></div>

                    {/* Submit Button */}
                    <div className="flex flex-col gap-4">
                        <button className="text-sm bg-darkCyan text-white rounded-lg font-medium h-10">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;

import React from "react";
import { RxCross1 } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";

function Profile({ toggleShowProfile }) {
	return (
		<div className="w-1/4 h-full flex flex-col gap-4 border-l border-borderColor">
			{/* Header */}
			<div className="flex flex-row items-center justify-between border-b border-borderColor px-4 py-[1.62rem]">
				<h3 className="text-heading text-xl cursor-default">Profile</h3>
				<span
					className="hover:text-highlight text-xl cursor-pointer"
					onClick={toggleShowProfile}
				>
					<RxCross1 />
				</span>
			</div>

			{/* User Image */}
			<div className="flex items-center justify-center">
				<img
					src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="User Image"
					className="w-48 h-36 object-center object-cover rounded-md"
				/>
			</div>

            {/* Description and Other Content */}
            <div className="flex flex-col px-4 gap-4">

                <div className="flex flex-col">
                    <h3 className="text-lg text-heading">Blake Jonathan</h3>
                    <p className="text-xs">Sales Manager</p>
                </div>

                <p className="flex flex-row items-center gap-2">
                    <span>
                        <CiClock2 />
                    </span>
                    <span className="text-xs">6:50 AM local time</span>
                </p>
            </div>
		</div>
	);
}

export default Profile;

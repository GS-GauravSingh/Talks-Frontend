import React from "react";

function DeleteAccount() {
	return (
		<div className="flex-grow h-full pb-4 flex justify-center">
			<div className="flex flex-col">
                <p className="text-red-700 text-center">Are you sure you want to delete your account? This action is irreversible.</p>
                <p className="text-red-700 text-center mt-2">Once deleted, all your data will be lost permanently.</p>
                <button className="bg-red-700 text-black font-semibold rounded-lg h-10 cursor-pointer active:scale-95 transition-all duration-75 ease-linear mt-4">
                    Delete Account
                </button>
            </div>
		</div>
	);
}

export default DeleteAccount;

import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteUserAccount } from "../utils/user.util";
import { disconnectSocketServer } from "../utils/socket.util";

function DeleteAccount() {
	const dispatch = useDispatch();
	function handleAccountDeletion(t) {
		toast.dismiss(t.id);
		console.log(toast);

		dispatch(disconnectSocketServer()); // disconnect the socket server before account deletion.
		dispatch(deleteUserAccount()); // delete user account (after confirmation)
	}

	function handleOnClick() {
		toast((t) => (
			<div className="text-center">
				Are you sure you want to delete your account? This action is{" "}
				<strong>irreversible.</strong>
				<div className="flex items-center justify-around mt-2">
					<button
						className="border border-borderColor rounded-md bg-borderColor text-heading text-xs p-2 cursor-pointer active:scale-95 transition-all duration-75 ease-linear"
						onClick={() => toast.dismiss(t.id)}
					>
						Dismiss
					</button>

					<button
						className="border border-red-500 rounded-md bg-red-500 text-heading text-xs p-2 cursor-pointer active:scale-95 transition-all duration-75 ease-linear"
						onClick={() => handleAccountDeletion(t)}
					>
						Delete
					</button>
				</div>
			</div>
		));
	}
	return (
		<div className="flex-grow h-full pb-4 flex justify-center">
			<div className="flex flex-col">
				<p className="text-red-500 text-center">
					Are you sure you want to delete your account? This action is
					irreversible.
				</p>
				<p className="text-red-500 text-center mt-2">
					Once deleted, all your data will be lost permanently.
				</p>
				<button
					onClick={handleOnClick}
					className="bg-red-500 text-black font-semibold rounded-lg h-10 cursor-pointer active:scale-95 transition-all duration-75 ease-linear mt-4"
				>
					Delete Account
				</button>
			</div>
		</div>
	);
}

export default DeleteAccount;

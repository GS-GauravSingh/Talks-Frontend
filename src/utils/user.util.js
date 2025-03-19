import toast from "react-hot-toast";
import axiosUserInstance from "../axios/axiosUserInstance";
import {
	setAuthError,
	setAuthLoading,
	setAuthUser,
	setAuthUserLogout,
} from "../redux/slices/authSlice";

// By default, Redux does not allow asynchronous tasks inside action creators, as they must return plain JavaScript objects. However, with the help of Redux Thunk middleware, action creators can return a function instead of an object. This function receives dispatch and getState as arguments, enabling the execution of asynchronous tasks like API calls before updating the Redux store.

// Following are the asynchronous Redux Thunk action creators.

// Get Me - Fetch User Details, JWT cookie is sent along with the request and the backend responds back with the user details, if token is valid. Otherwise, the user is unauthorized.
export function getMe() {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		// Display a loading toast.
		// Each toast call returns a unique id.
		const toastId = toast.loading("Fetching user details...");
		try {
			dispatch(setAuthError(null));
			dispatch(setAuthLoading(true));


			// API Call
			const response = await axiosUserInstance.get("/me");
			// console.log("user.util.js: getMe(): ", response);

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			dispatch(setAuthUser(response.data.user));
			return response;
		} catch (error) {
			// console.log("ERROR: auth.util.js: getMe(): ", error);
			dispatch(setAuthError(error));

			// Update the loading toast to error.
			toast.error(
				error?.response?.data?.message ||
					error?.message ||
					"Something went wrong",
				{
					id: toastId,
				}
			);

			return Promise.reject(error);
		} finally {
			dispatch(setAuthLoading(false));
		}
	};
}

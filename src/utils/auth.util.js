import toast from "react-hot-toast";
import axiosAuthInstance from "../axios/axiosAuthInstance";
import {
	setAuthError,
	setAuthLoading,
	setAuthUser,
	setAuthUserLogout,
} from "../redux/slices/authSlice";

// By default, Redux does not allow asynchronous tasks inside action creators, as they must return plain JavaScript objects. However, with the help of Redux Thunk middleware, action creators can return a function instead of an object. This function receives dispatch and getState as arguments, enabling the execution of asynchronous tasks like API calls before updating the Redux store.

// Following are the asynchronous Redux Thunk action creators.

// REGISTER USER
export function registerUser(jsonData) {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		// Display a loading toast.
		// Each toast call returns a unique id.
		const toastId = toast.loading("Sending OTP...");
		try {
			dispatch(setAuthError(null));
			dispatch(setAuthLoading(true));

			// API Call
			const response = await axiosAuthInstance.post("/signup", jsonData);
			// console.log("auth.util.js: registerUser(): ", response);

			// Store the user email in the session storage, it helps in OTP verification.
			sessionStorage.setItem("userEmail", jsonData.email);

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			return response;
		} catch (error) {
			// console.log("ERROR: auth.util.js: registerUser(): ", error);
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

// VERIFY OTP
export function verifyOTP(jsonData) {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		// Display a loading toast.
		// Each toast call returns a unique id.
		const toastId = toast.loading("Verifying OTP...");
		try {
			dispatch(setAuthError(null));
			dispatch(setAuthLoading(true));

			// API Call           
			const response = await axiosAuthInstance.post(
				"/verify-otp",
				jsonData
			);
			// console.log("auth.util.js: verifyOTP(): ", response);
			dispatch(setAuthUser(response.data.user));

			// Delete the user email from the session storage once the OTP is verified.
			sessionStorage.removeItem("userEmail");

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			return response;
		} catch (error) {
			// console.log("ERROR: auth.util.js: verifyOTP(): ", error);
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

// RESEND OTP
export function resendOTP(jsonData) {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		// Display a loading toast.
		// Each toast call returns a unique id.
		const toastId = toast.loading("Resending OTP...");
		try {
			dispatch(setAuthError(null));
			dispatch(setAuthLoading(true));

			// API Call
			const response = await axiosAuthInstance.post(
				"/resend-otp",
				jsonData
			);
			// console.log("auth.util.js: resendOTP(): ", response);

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			return response;
		} catch (error) {
			// console.log("ERROR: auth.util.js: resendOTP(): ", error);
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

// LOGIN USER
export function loginUser(jsonData) {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		// Display a loading toast.
		// Each toast call returns a unique id.
		const toastId = toast.loading("Logging In...");

		try {
			dispatch(setAuthError(null));
			dispatch(setAuthLoading(true));

			// API Call
			const response = await axiosAuthInstance.post("/login", jsonData);
			// console.log("auth.util.js: loginUser(): ", response);
			dispatch(setAuthUser(response.data.user));

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			return response;
		} catch (error) {
			// console.log("ERROR: auth.util.js: loginUser(): ", error);
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

// LOGOUT USER
export function logoutUser() {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		// Display a loading toast.
		// Each toast call returns a unique id.
		const toastId = toast.loading("Logging Out...");
		try {
			dispatch(setAuthError(null));
			dispatch(setAuthLoading(true));

			// API Call
			const response = await axiosAuthInstance.post("/logout");
			// console.log("auth.util.js: logoutUser(): ", response);
			dispatch(setAuthError());

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			return response;
		} catch (error) {
			// console.log("ERROR: auth.util.js: logoutUser(): ", error);
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

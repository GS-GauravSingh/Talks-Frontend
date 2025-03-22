import toast from "react-hot-toast";
import axiosUserInstance from "../axios/axiosUserInstance";
import {
	setAuthError,
	setAuthLoading,
	setAuthUser,
	setAuthUserLogout,
} from "../redux/slices/authSlice";

import {
	setContacts,
	setContactsError,
	setContactsLoading,
	setConversations,
	setConversationsError,
	setConversationsLoading,
	setConversationsMessages,
	setMessageError,
	setMessageLoading,
} from "../redux/slices/chatSlice";
import { connectSocketServer, getOnlineUsers } from "./socket.util";

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
			const response = await axiosUserInstance.get("/user/me");
			// console.log("user.util.js: getMe(): ", response);

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			dispatch(setAuthUser(response.data.user));

			// connect to the socket server.
			dispatch(connectSocketServer());

			// get the online users
			dispatch(getOnlineUsers());
			return response;
		} catch (error) {
			// console.log("ERROR: user.util.js: getMe(): ", error);
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

// Get Contacts: Fetches all verified users.
export function getContacts() {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		try {
			dispatch(setContactsError(null));
			dispatch(setContactsLoading(true));

			// API Call
			const response = await axiosUserInstance.get("/user/all");
			// console.log("user.util.js: getAllUsers(): ", response);

			dispatch(setContacts(response.data.users));
			return response;
		} catch (error) {
			dispatch(setContactsError(error));
			// console.log("ERROR: user.util.js: getAllUsers(): ", error);
		} finally {
			dispatch(setContactsLoading(false));
		}
	};
}

// Start a Conversation: Starts the conversation between logged in user and selected user.
export function startConversation(selectedUserId) {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		try {
			dispatch(setConversationsError(null));
			dispatch(setConversationsLoading(true));

			// API Call
			const response = await axiosUserInstance.post(
				"/conversation/start",
				{ userId: selectedUserId }
			);
			// console.log("user.util.js: startConversation(): ", response);

			dispatch(setConversations(response.data.conversation));
			return response;
		} catch (error) {
			dispatch(setConversationsError(error));
			// console.log("ERROR: user.util.js: startConversation(): ", error);
		} finally {
			dispatch(setConversationsLoading(false));
		}
	};
}

// Send Message: Send a message to the selected conversation.
export function sendMessage({
	userId,
	content = "",
	image = "",
	giphyUrl = "",
}) {
	return async (dispatch, getState) => {
		// dispatch: function used to update the redux store data.
		// getState: function used to get the current state/snapshot of the redux store. Syntax: `getState().sliceName.property`

		// Display a loading toast.
		// Each toast call returns a unique id.
		const toastId = toast.loading("Sending...");
		try {
			dispatch(setMessageError(null));
			dispatch(setMessageLoading(true));

			// API Call
			const response = await axiosUserInstance.post("/message/send", {
				userId,
				content,
				image,
				giphyUrl,
			});
			console.log("user.util.js: sendMessage(): ", response);

			dispatch(setConversationsMessages(response.data.newMessage));

			// Update the loading toast to success.
			toast.success(response.data.message, {
				id: toastId,
			});

			return response;
		} catch (error) {
			dispatch(setMessageError(error));
			// console.log("ERROR: user.util.js: sendMessage(): ", error);

			// Update the loading toast to error.
			toast.error(
				error?.response?.data?.message ||
					error?.message ||
					"Something went wrong",
				{
					id: toastId,
				}
			);
		} finally {
			dispatch(setMessageLoading(false));
		}
	};
}

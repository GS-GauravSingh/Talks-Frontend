import { io } from "socket.io-client";
import { setOnlineUsers, setSocketInstance } from "../redux/slices/socketSlice";
import { setConversationsMessages } from "../redux/slices/chatSlice";

// By default, Redux does not allow asynchronous tasks inside action creators, as they must return plain JavaScript objects. However, with the help of Redux Thunk middleware, action creators can return a function instead of an object. This function receives dispatch and getState as arguments, enabling the execution of asynchronous tasks like API calls before updating the Redux store.

// Following are the asynchronous Redux Thunk action creators.

// connectSocketServer(): Function to establish socket connection only when user is authenticated.
export function connectSocketServer() {
	return (dispatch, getState) => {
		const { isAuthenticated } = getState().auth;
		console.log(isAuthenticated);

		if (!isAuthenticated || getState().socket.socketInstance?.connected) {
			return;
		}

		try {
			const socket = io(import.meta.env.VITE_BACKEND_BASE_URL, {
				withCredentials: true /* allow cookies to be sent along with the websocket requests */,
				autoConnect: false /* we connect manually after authentication */,
			});
			console.log(socket);

			// update the redux store - store this `socket` instance in the socket slice.
			dispatch(setSocketInstance(socket));

			// establish a connection to the socket server.
			socket.connect();
		} catch (error) {
			console.log(error);
		}
	};
}

// disconnectSocketServer(): Function to dicsonnect socket connection only when socket connection is already established.
export function disconnectSocketServer() {
	return (dispatch, getState) => {
		if (getState().socket.socketInstance?.connected) {
			getState().socket.socketInstance.disconnect();
			dispatch(setSocketInstance(null));
		}
	};
}

// getOnlineUsers(): Listens to a `getOnlineUsers` event.
export function getOnlineUsers() {
	return (dispatch, getState) => {
		const socket = getState().socket?.socketInstance;
		console.log(socket);

		if (socket) {
			// Listen for the response from the server
			const handleOnlineUsers = (data) => {
				console.log("Online users list received: ", data);
				dispatch(setOnlineUsers(data?.onlineUsers));
			};

			socket.on("getOnlineUsers", handleOnlineUsers);
		}
	};
}

export function subscribeToMessages() {
	return (dispatch, getState) => {
		const { selectedConversation } = getState().chat;
        
		if (!selectedConversation) {
            return;
		}
        
		const socket = getState().socket.socketInstance;
		socket.on("newMessage", (newMessage) => {

			const isMessageSentFromSelectedUser = newMessage.author === selectedConversation._id;
			if(!isMessageSentFromSelectedUser)
			{
				return;
			}

			dispatch(setConversationsMessages(newMessage));
		});
	};
}

export function unsubscribeFromMessages() {
	return (dispatch, getState) => {
		const socket = getState().socket.socketInstance;
		socket.off("newMessage");
	};
}

import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

// See, every slice has an initial state that represents how the slice looks like initially. You can define the initial state of a Redux slice as an object.
const initialState = {
	socketInstance: null, // Store the socket instance
	onlineUsers: [], // store online users (one's who are connected with the socket server)
};

// Creating Slice - `createSlice()` function is used to create slice and it also accepts arguments.
const socketSlice = createSlice({
	// `name`: Specifies the name of the slice. This is used to identify the slice within the Redux store.
	name: "socket",

	// Initial State of auth slice.
	initialState,

	/*
    `reducers` are simple javascript functions that are used to update the slice state.
    */
	reducers: {
		// Each reducer function has access to two parameters: `state` and `action`.
		// - `state` represents the current state of the slice, like a snapshot of the slice at a specific moment in time.
		// - `action` contains the details about what changes need to be made, including the `type` (which describes the action) and an optional `payload` (which carries data for the update).

		setSocketInstance: function (state, action) {
			state.socketInstance = action.payload;
		},

		setOnlineUsers: function (state, action) {
			state.onlineUsers = action.payload;
		},
	},
});

export const { setSocketInstance, setOnlineUsers } = socketSlice.actions;
export default socketSlice.reducer;

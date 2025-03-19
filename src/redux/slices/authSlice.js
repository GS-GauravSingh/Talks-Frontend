import { createSlice } from "@reduxjs/toolkit";

// See, every slice has an initial state that represents how the slice looks like initially. You can define the initial state of a Redux slice as an object.
const initialState = {
	authUser: null, // store authenticated user details
	authLoading: false, // Indicates whether the authentication process (such as login/signup) is happening.
	authError: null, // stores error message, if any error encounter in authentication process.
	isAuthenticated: false, // tracks user login status
};

// Creating Slice - `createSlice()` function is used to create slice and it also accepts arguments.
const authSlice = createSlice({
	// `name`: Specifies the name of the slice. This is used to identify the slice within the Redux store.
	name: "auth",

	// Initial State of auth slice.
	initialState,

	/*
    `reducers` are simple javascript functions that are used to update the slice state.
    */
	reducers: {
		// Each reducer function has access to two parameters: `state` and `action`.
		// - `state` represents the current state of the slice, like a snapshot of the slice at a specific moment in time.
		// - `action` contains the details about what changes need to be made, including the `type` (which describes the action) and an optional `payload` (which carries data for the update).

		setAuthError: function (state, action) {
			state.authError = action.payload;
			state.isAuthenticated = false;
		},

		setAuthLoading: function (state, action) {
			state.authLoading = action.payload;
		},

		setAuthUser: function (state, action) {
			state.authUser = action.payload;
			state.isAuthenticated = true;
		},

		setAuthUserLogout: function (state, action) {
			state.authUser = null;
			state.isAuthenticated = false;
		},
	},
});

export const { setAuthError, setAuthLoading, setAuthUser, setAuthUserLogout } =
	authSlice.actions;
export default authSlice.reducer;

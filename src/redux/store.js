// Creating Redux Store
// `configureStore()` function is used to create a global store. So, we need to import it from redux toolkit.
import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./slices/authSlice";
import chatReducers from "./slices/chatSlice";
import socketReducers from "./slices/socketSlice";

// Global Store - Where we store all the data.
// Create a global store using `configureStore()` function and also export it so that we can use this store in other part of application.

// The `configureStore()` function in Redux Toolkit can accept an argument, which is an object containing various configuration options for your Redux store.
const store = configureStore({
	// The `reducer` property, which tells the store which reducer function you have to use to update the store data.
	reducer: {
		auth: authReducers,
		chat: chatReducers,
		socket: socketReducers,
	},
});

export default store;

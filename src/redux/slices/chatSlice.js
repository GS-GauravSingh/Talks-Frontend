import { createSlice } from "@reduxjs/toolkit";

// See, every slice has an initial state that represents how the slice looks like initially. You can define the initial state of a Redux slice as an object.
const initialState = {
	conversations: [], // List of all conversations (each containing participants involved in the conversation and messages sent)
	contacts: [], // list of all the users for displaying contacts.
	selectedConversation: null, // ID of the selected conversation
	conversationsLoading: false,
	conversationsError: null,
	contactsLoading: false,
	contactsError: null,
	messageLoading: false,
	messageError: null,
	profileLoading: false,
	profileError: null,
};

// Creating Slice - `createSlice()` function is used to create slice and it also accepts arguments.
const chatSlice = createSlice({
	// `name`: Specifies the name of the slice. This is used to identify the slice within the Redux store.
	name: "chat",

	// Initial State of auth slice.
	initialState,

	/*
    `reducers` are simple javascript functions that are used to update the slice state.
    */
	reducers: {
		// Each reducer function has access to two parameters: `state` and `action`.
		// - `state` represents the current state of the slice, like a snapshot of the slice at a specific moment in time.
		// - `action` contains the details about what changes need to be made, including the `type` (which describes the action) and an optional `payload` (which carries data for the update).

		setConversationsLoading: function (state, action) {
			state.conversationsLoading = action.payload;
		},

		setConversationsError: function (state, action) {
			state.conversationsError = action.payload;
		},

		setContactsLoading: function (state, action) {
			state.contactsLoading = action.payload;
		},

		setContactsError: function (state, action) {
			state.contactsError = action.payload;
		},

		setMessageLoading: function (state, action) {
			state.messageLoading = action.payload;
		},

		setMessageError: function (state, action) {
			state.messageError = action.payload;
		},

		setProfileLoading: function (state, action) {
			state.profileLoading = action.payload;
		},

		setProfileError: function (state, action) {
			state.profileError = action.payload;
		},

		setConversations: function (state, action) {
			state.conversations = action.payload;
		},

		setConversationsMessages: function (state, action) {
			state.conversations?.messages.push(action.payload);
		},

		setContacts: function (state, action) {
			state.contacts = action.payload;
		},

		setSelectedConversation: function (state, action) {
			state.selectedConversation = action.payload;
		},
	},
});

export const {
	setContactsError,
	setContactsLoading,
	setConversationsError,
	setConversationsLoading,
	setConversations,
	setContacts,
	setSelectedConversation,
	setMessageLoading,
	setMessageError,
	setConversationsMessages,
	setProfileError,
	setProfileLoading,
} = chatSlice.actions;

export default chatSlice.reducer;

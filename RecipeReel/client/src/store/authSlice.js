import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	loggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
			state.loggedIn = true;
		},
		logout: (state) => {
			state.user = null;
			state.loggedIn = false;
			localStorage.clear(); // Clear localStorage
		},
		updateUser: (state, action) => {
			state.user = action.payload;
			state.loggedIn = true;
		},
	},
});

export const { login, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const getUserFromLocalStorage = () => {
	const user = localStorage.getItem('user');
	return user ? JSON.parse(user) : null;
};

const initialState = {
	name: 'auth',
	user: getUserFromLocalStorage(),
	isLoggedIn: getUserFromLocalStorage() !== null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			localStorage.setItem('user', JSON.stringify(action.payload));
			state.user = action.payload;
			state.isLoggedIn = true; // Set isLoggedIn to true on login
		},
		logout: (state) => {
			localStorage.removeItem('user');
			state.user = null;
			state.isLoggedIn = false; // Set isLoggedIn to false on logout
		},
		updateUser: (state, action) => {
			localStorage.setItem('user', JSON.stringify(action.payload));
			state.user = action.payload;
		},
	},
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import authReducer, { logout, login } from './authSlice';

const checkLocalStorageToken = () => {
	const token = localStorage.getItem('token');
	const user = JSON.parse(localStorage.getItem('user'));
	if (token) {
		// Dispatch the login action with the user data
		store.dispatch(login(user));
	} else {
		store.dispatch(logout()); // Dispatch the logout action
	}
};

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

checkLocalStorageToken();

export default store;

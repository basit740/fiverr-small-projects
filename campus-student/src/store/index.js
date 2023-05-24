import { configureStore } from '@reduxjs/toolkit';
import campusReducer from './campusSlice';
import studentReducer from './studentSlice';

const store = configureStore({
	reducer: {
		campusSlice: campusReducer,
		studentSlice: studentReducer,
	},
});

export default store;

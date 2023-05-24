import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampuses = createAsyncThunk(
	'campuses/fetchCampuses',
	async () => {
		const response = await axios.get('/api/campuses');
		return response.data;
	}
);

export const fetchCampusById = createAsyncThunk(
	'campuses/fetchCampusById',
	async (campusId) => {
		const response = await axios.get(`/api/campuses/${campusId}`);
		return response.data;
	}
);

export const addCampus = createAsyncThunk(
	'campuses/addCampus',
	async (campusData) => {
		const response = await axios.post('/api/campuses', campusData); //ajax call
		return response.data;
	}
);

export const updateCampus = createAsyncThunk(
	'campuses/updateCampus',
	async (campusData) => {
		const { id, ...updatedData } = campusData;
		const response = await axios.put(`/api/campuses/${id}`, updatedData);
		return response.data;
	}
);

export const removeCampus = createAsyncThunk(
	'campuses/removeCampus',
	async (campusId) => {
		await axios.delete(`/api/campuses/${campusId}`);
		return campusId;
	}
);

export const unregisterStudent = createAsyncThunk(
	'campuses/unregisterStudent',
	async ({ campusId, studentId }) => {
		await axios.delete(`/api/campuses/${campusId}/students/${studentId}`);
		return { campusId, studentId };
	}
);

const initialState = {
	campuses: [],
	selectedCampus: null,
};

const campusSlice = createSlice({
	name: 'campusSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCampuses.fulfilled, (state, action) => {
				state.campuses = action.payload;
			})
			.addCase(fetchCampusById.fulfilled, (state, action) => {
				state.selectedCampus = action.payload;
			})
			.addCase(addCampus.fulfilled, (state, action) => {
				state.campuses.push(action.payload);
			})
			.addCase(updateCampus.fulfilled, (state, action) => {
				const updatedCampusData = action.payload;
				const existingCampus = state.selectedCampus;
				state.selectedCampus = {
					...existingCampus,
					...updatedCampusData,
				};
			})
			.addCase(removeCampus.fulfilled, (state, action) => {
				state.campuses = state.campuses.filter(
					(campus) => campus.id !== action.payload
				);
			})
			.addCase(unregisterStudent.fulfilled, (state, action) => {
				const { campusId, studentId } = action.payload;

				state.campuses = state.campuses.map((campus) => {
					if (campus.id === +campusId) {
						return {
							...campus,
							Students:
								campus.Students &&
								campus.Students.filter((student) => student.id !== studentId),
						};
					}
					return campus;
				});

				// for Single Campus View
				if (state.selectedCampus && state.selectedCampus.id === +campusId) {
					state.selectedCampus = {
						...state.selectedCampus,
						Students:
							state.selectedCampus.Students &&
							state.selectedCampus.Students.filter(
								(student) => student.id !== studentId
							),
					};
				}
			});
	},
});

export default campusSlice.reducer;

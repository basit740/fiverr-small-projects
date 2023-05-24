import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStudents = createAsyncThunk(
	'students/fetchStudents',
	async () => {
		const response = await axios.get('/api/students');
		return response.data;
	}
);

export const fetchStudentById = createAsyncThunk(
	'students/fetchStudentById',
	async (studentId) => {
		const response = await axios.get(`/api/students/${studentId}`);
		return response.data;
	}
);

export const addStudent = createAsyncThunk(
	'students/addStudent',
	async (studentData) => {
		const response = await axios.post('/api/students', studentData);
		return response.data;
	}
);

export const updateStudent = createAsyncThunk(
	'students/updateStudent',
	async (studentData) => {
		const { id, ...updatedData } = studentData;
		const response = await axios.put(`/api/students/${id}`, updatedData);
		return response.data;
	}
);

export const removeStudent = createAsyncThunk(
	'students/removeStudent',
	async (studentId) => {
		await axios.delete(`/api/students/${studentId}`);
		return studentId;
	}
);

const initialState = {
	students: [],
	selectedStudent: null,
};

const studentSlice = createSlice({
	name: 'studentSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchStudents.fulfilled, (state, action) => {
				state.students = action.payload;
			})
			.addCase(fetchStudentById.fulfilled, (state, action) => {
				state.selectedStudent = action.payload;
			})
			.addCase(addStudent.fulfilled, (state, action) => {
				state.students.push(action.payload);
			})
			.addCase(updateStudent.fulfilled, (state, action) => {
				const updatedStudent = action.payload;
				const index = state.students.findIndex(
					(student) => student.id === updatedStudent.id
				);
				if (index !== -1) {
					state.students[index] = updatedStudent;
					state.selectedStudent = updatedStudent;
				}
			})
			.addCase(removeStudent.fulfilled, (state, action) => {
				state.students = state.students.filter(
					(student) => student.id !== action.payload
				);
			});
	},
});

export default studentSlice.reducer;

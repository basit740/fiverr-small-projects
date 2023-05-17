import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	getCategories,
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory,
} from '../../api/categories';

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const response = await getCategories();
		console.log(response);
		return response;
	}
);

export const fetchCategoryById = createAsyncThunk(
	'categories/fetchCategoryById',
	async (id) => {
		const response = await getCategory(id);
		return response;
	}
);

export const createNewCategory = createAsyncThunk(
	'categories/createCategory',
	async (categoryData, { getState }) => {
		const { auth } = getState();
		const response = await createCategory(categoryData, auth.user.accessToken);
		return response;
	}
);

export const updateExistingCategory = createAsyncThunk(
	'categories/updateCategory',
	async (categoryData, { getState }) => {
		const { auth } = getState();
		const response = await updateCategory(categoryData, auth.user.accessToken);
		return response;
	}
);

export const removeCategory = createAsyncThunk(
	'categories/deleteCategory',
	async (id, { getState }) => {
		const { auth } = getState();
		const response = await deleteCategory(id, auth.user.accessToken);
		return response;
	}
);

const initialState = {
	categories: [],
	currentCategory: null,
	status: 'idle',
	error: null,
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(fetchCategoryById.fulfilled, (state, action) => {
				state.currentCategory = action.payload;
			})
			.addCase(createNewCategory.fulfilled, (state, action) => {
				state.categories.push(action.payload);
			})
			.addCase(updateExistingCategory.fulfilled, (state, action) => {
				const updatedCategoryIndex = state.categories.findIndex(
					(category) => category.id === action.payload.id
				);
				if (updatedCategoryIndex !== -1) {
					state.categories[updatedCategoryIndex] = action.payload;
				}
			})
			.addCase(removeCategory.fulfilled, (state, action) => {
				state.categories = state.categories.filter(
					(category) => category.id !== action.payload.id
				);
			});
	},
});

export default categoriesSlice.reducer;

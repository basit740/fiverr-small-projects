import api from './api';

export function getCategories() {
	return api
		.get(`/roomcategories`)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function getCategory(id) {
	return api
		.get(`/roomcategories/${id}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function createCategory(categoryData, accessToken) {
	return api
		.post('/roomcategories', categoryData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function updateCategory(categoryData, accessToken) {
	return api
		.put(`/roomcategories`, categoryData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function deleteCategory(id, accessToken) {
	return api
		.delete(`/roomcategories/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

import api from './api';

export function getCustomers() {
	return api
		.get('/customers')
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function getCustomer(id) {
	return api
		.get(`/customers/${id}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function createCustomer(customerData) {
	return api
		.post('/customers', customerData)
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function updateCustomer(id, customerData) {
	return api
		.put(`/customers/${id}`, customerData)
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export function deleteCustomer(id) {
	return api
		.delete(`/customers/${id}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

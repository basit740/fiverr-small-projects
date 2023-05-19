import api from './api';

// Order Functions

export function specsMin() {
	return api
		.get('/specifications_Min', {})
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

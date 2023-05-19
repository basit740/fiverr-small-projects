import api from './api';

// Order Functions

export function specsRecm() {
	return api
		.get('/specifications_Recommended', {})
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

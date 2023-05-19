import api from './api';

// Order Functions

export function getSocials() {
	return api
		.get('/socials', {})
		.then((response) => response.data)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

import axios from 'axios';

const apiURL = 'http://localhost:3000/api';

const api = axios.create({
	baseURL: apiURL, // Replace this with your API base URL
});

export default api;

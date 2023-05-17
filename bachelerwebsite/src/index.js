import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CategoryProvider from './website/context/CategoryContext';
import { Provider } from 'react-redux';
import store from './store/index';

// import { login } from './store/reducers/authSlice';

// // Check if the user is logged in when the application loads
// const user = JSON.parse(localStorage.getItem('user'));
// if (user) {
// 	store.dispatch(login({ user }));
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<CategoryProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</CategoryProvider>
	</Provider>
);

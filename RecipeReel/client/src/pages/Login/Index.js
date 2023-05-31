import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import axios from 'axios';

const Login = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Create a payload object with the form data
		const payload = {
			username,
			password,
		};

		try {
			// Make an API call to login
			// Replace the placeholder URL with your actual login endpoint
			const response = await axios.post(
				process.env.REACT_APP_API_SERVER + '/api/auth/login',
				payload
			);
			console.log(response.data); // Handle the response data accordingly

			// Save the token in localStorage
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user', JSON.stringify(response.data.user));

			setLoading(false);
			// Save the user data in Redux state
			dispatch(login(response.data.user));

			// Set loggedIn state to true
			// Assuming you have a loggedIn action in your authActions file

			navigate('/');
		} catch (error) {
			alert(error.message);
			setLoading(false);
			console.error(error); // Handle any error that occurred during the API call
		}
	};

	return (
		<div className='flex mt-16 min-h-min login'>
			<div className='flex w-full container mx-auto max-wd-4xl'>
				{/* Left Card */}
				<div className='left rounded-l-lg shadow p-8'>
					<h2 className='text-2xl font-bold mb-4'>Recipe Reel</h2>
					<p className='text-gray-600 mb-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
						eleifend dolor.
					</p>
					<Link
						to='/register'
						className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full'
					>
						Register
					</Link>
				</div>

				{/* Vertical Line */}
				<div className='w-px bg-gray-200'></div>

				{/* Right Card */}
				<div className='flex-1 bg-white rounded-r-lg shadow p-8'>
					<h2 className='text-2xl font-bold mb-4'>Login</h2>
					<form onSubmit={handleLogin}>
						<div className='mb-4'>
							<label
								className='block text-gray-700 font-bold mb-2'
								htmlFor='username'
							>
								Username
							</label>
							<input
								className='border border-gray-400 rounded w-full py-2 px-3'
								type='text'
								id='username'
								name='username'
								placeholder='Enter your username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 font-bold mb-2'
								htmlFor='password'
							>
								Password
							</label>
							<input
								className='border border-gray-400 rounded w-full py-2 px-3'
								type='password'
								id='password'
								name='password'
								placeholder='Enter your password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button
							className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full'
							type='submit'
						>
							{loading ? 'Logging In...' : 'Login'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

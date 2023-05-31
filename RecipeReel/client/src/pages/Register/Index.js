import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Register.css';

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();

		// Create a payload object with the form data
		const payload = {
			firstName,
			lastName,
			username,
			password,
			confirmPassword,
		};

		try {
			// Make an API call to register
			const response = await axios.post(
				process.env.REACT_APP_API_SERVER + '/api/auth/register',
				payload
			);
			console.log(response.data); // Handle the response data accordingly
			navigate('/login');
		} catch (error) {
			alert(error.message);
			console.error(error); // Handle any error that occurred during the API call
		}
	};

	return (
		<div className='flex mt-16 min-h-min login'>
			<div className='flex w-full container mx-auto max-wd-4xl'>
				{/* Left Card */}
				<div className='flex-1 bg-white rounded-l-lg shadow p-8'>
					<h2 className='text-2xl font-bold mb-4'>Register</h2>
					<form onSubmit={handleRegister}>
						<div className='mb-4'>
							<label
								className='block text-gray-700 font-bold mb-2'
								htmlFor='firstName'
							>
								First Name
							</label>
							<input
								className='border border-gray-400 rounded w-full py-2 px-3'
								type='text'
								id='firstName'
								name='firstName'
								placeholder='Enter your first name'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className='mb-4'>
							<label
								className='block text-gray-700 font-bold mb-2'
								htmlFor='lastName'
							>
								Last Name
							</label>
							<input
								className='border border-gray-400 rounded w-full py-2 px-3'
								type='text'
								id='lastName'
								name='lastName'
								placeholder='Enter your last name'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
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
						<div className='mb-4'>
							<label
								className='block text-gray-700 font-bold mb-2'
								htmlFor='confirmPassword'
							>
								Confirm Password
							</label>
							<input
								className='border border-gray-400 rounded w-full py-2 px-3'
								type='password'
								id='confirmPassword'
								name='confirmPassword'
								placeholder='Confirm your password'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
						{password !== confirmPassword && (
							<p className='text-red-500 mb-4'>Passwords do not match.</p>
						)}
						<button
							className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full'
							type='submit'
							disabled={password !== confirmPassword}
						>
							Register
						</button>
					</form>
				</div>

				{/* Vertical Line */}
				<div className='w-px bg-gray-200'></div>

				{/* Right Card */}
				<div className='flex-1 bg-white rounded-r-lg shadow p-8'>
					<h2 className='text-2xl font-bold mb-4'>Login</h2>
					<p className='text-gray-600 mb-4'>
						Already have an account? Login to access your profile.
					</p>
					<Link
						to='/login'
						className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full'
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;

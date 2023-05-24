import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../store/studentSlice';

const AddStudentForm = () => {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const newStudent = {
			firstName,
			lastName,
			email,
		};
		dispatch(addStudent(newStudent));
		// Reset the form inputs
		setFirstName('');
		setLastName('');
		setEmail('');
	};

	return (
		<div>
			<h2>Add Student</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='firstName'>First Name:</label>
					<input
						type='text'
						id='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='lastName'>Last Name:</label>
					<input
						type='text'
						id='lastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type='submit'>Add Student</button>
			</form>
		</div>
	);
};

export default AddStudentForm;

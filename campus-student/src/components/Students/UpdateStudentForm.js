import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudent } from '../../store/studentSlice';

const UpdateStudentForm = ({ student }) => {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState(student.firstName);
	const [lastName, setLastName] = useState(student.lastName);
	const [email, setEmail] = useState(student.email);

	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedStudent = {
			id: student.id,
			firstName,
			lastName,
			email,
		};
		dispatch(updateStudent(updatedStudent));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Update Student</h3>
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
			<button type='submit'>Update</button>
		</form>
	);
};

export default UpdateStudentForm;

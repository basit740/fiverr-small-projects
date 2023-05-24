import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCampus } from '../../store/campusSlice';

const AddCampusForm = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Perform form validation here if needed

		// Dispatch the addCampus action to update the state
		dispatch(addCampus({ name, address }));

		// Clear the form input fields
		setName('');
		setAddress('');
	};

	return (
		<div>
			<h3>Add Campus</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='address'>Address:</label>
					<input
						type='text'
						id='address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<button type='submit'>Add Campus</button>
			</form>
		</div>
	);
};

export default AddCampusForm;

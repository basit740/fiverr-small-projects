import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCampus } from '../../store/campusSlice';

const UpdateCampusForm = ({ campus }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState(campus.name);
	const [address, setAddress] = useState(campus.address);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Make AJAX request to update the campus
		dispatch(updateCampus({ id: campus.id, name, address }));

		// Reset the form fields
		// setName('');
		// setAddress('');
	};

	return (
		<div>
			<h3>Update Campus</h3>
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
				<button type='submit'>Update</button>
			</form>
		</div>
	);
};

export default UpdateCampusForm;

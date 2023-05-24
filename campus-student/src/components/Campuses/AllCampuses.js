import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses, removeCampus } from '../../store/campusSlice.js';
import AddCampusForm from './AddCampusForm.js';

const AllCampuses = () => {
	const dispatch = useDispatch();
	const campuses = useSelector((state) => state.campusSlice.campuses);

	useEffect(() => {
		dispatch(fetchCampuses());
	}, [dispatch]);

	const handleRemoveCampus = (campusId) => {
		dispatch(removeCampus(campusId));
	};

	if (campuses.length === 0) {
		return (
			<>
				<h2>All Campuses</h2>
				<p>Loading...</p>
			</>
		);
	}

	return (
		<div>
			<h2>All Campuses</h2>
			<AddCampusForm />
			{campuses.map((campus) => (
				<div key={campus.id}>
					<Link to={`/campuses/${campus.id}`}>
						<h3>{campus.name}</h3>
						<img src={campus.imageUrl} alt={campus.name} />
					</Link>
					<button onClick={() => handleRemoveCampus(campus.id)}>X</button>
				</div>
			))}
		</div>
	);
};

export default AllCampuses;

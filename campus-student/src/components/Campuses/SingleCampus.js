import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCampusById, unregisterStudent } from '../../store/campusSlice';

import UpdateCampusForm from './UpdateCampusForm';

const SingleCampus = () => {
	const dispatch = useDispatch();
	const { campusId } = useParams();
	const campus = useSelector((state) => state.campusSlice.selectedCampus);

	useEffect(() => {
		dispatch(fetchCampusById(campusId));
	}, [dispatch, campusId]);

	const handleUnregister = (studentId) => {
		dispatch(unregisterStudent({ campusId, studentId }));
	};

	if (!campus) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>{campus.name}</h2>
			<img src={campus.imageUrl} alt={campus.name} />
			<p>Address: {campus.address}</p>
			<p>Description: {campus.description}</p>
			<UpdateCampusForm campus={campus} />
			<h3>Students</h3>
			{campus.Students.length > 0 ? (
				<ul>
					{campus.Students.map((student) => (
						<li key={student.id}>
							<Link to={`/students/${student.id}`}>
								{`${student.firstName} ${student.lastName}`}
							</Link>
							<button onClick={() => handleUnregister(student.id)}>
								Unregister
							</button>
						</li>
					))}
				</ul>
			) : (
				<p>No students in this campus</p>
			)}
		</div>
	);
};

export default SingleCampus;

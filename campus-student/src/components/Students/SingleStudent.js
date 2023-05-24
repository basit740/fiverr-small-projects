import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchStudentById } from '../../store/studentSlice';
import UpdateStudentForm from './UpdateStudentForm';

const SingleStudent = () => {
	const dispatch = useDispatch();
	const { studentId } = useParams();
	const student = useSelector((state) => state.studentSlice.selectedStudent);

	useEffect(() => {
		dispatch(fetchStudentById(studentId));
	}, [dispatch, studentId]);

	if (!student) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<img src={student.imageUrl} alt={student.firstName} />
			<h2>{`${student.firstName} ${student.lastName}`}</h2>
			<p>Email: {student.email}</p>

			<p>GPA: {student.gpa}</p>
			{student.Campus ? (
				<p>
					Campus:{' '}
					<Link to={`/campuses/${student.Campus.id}`}>
						{student.Campus.name}
					</Link>
				</p>
			) : (
				<p>No campus assigned</p>
			)}
			<UpdateStudentForm student={student} />
		</div>
	);
};

export default SingleStudent;

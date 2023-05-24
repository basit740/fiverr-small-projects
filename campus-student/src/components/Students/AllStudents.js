import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents, removeStudent } from '../../store/studentSlice';
import AddStudentForm from './AddStudentForm';

const AllStudents = () => {
	const dispatch = useDispatch();
	const students = useSelector((state) => state.studentSlice.students);

	useEffect(() => {
		dispatch(fetchStudents());
	}, [dispatch]);

	const handleRemoveStudent = (studentId) => {
		dispatch(removeStudent(studentId));
	};

	if (students.length === 0) {
		return (
			<>
				<h2>All Students</h2>
				<p>Loading...</p>
			</>
		);
	}

	return (
		<div>
			<h2>All Students</h2>
			<AddStudentForm />
			{students.map((student) => (
				<div key={student.id}>
					<Link to={`/students/${student.id}`}>
						<h3>
							{student.firstName} {student.lastName}
						</h3>
					</Link>
					<button onClick={() => handleRemoveStudent(student.id)}>X</button>
				</div>
			))}
		</div>
	);
};

export default AllStudents;

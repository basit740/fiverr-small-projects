import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
const UpdateBookForm: React.FC = () => {
	const [title, setTitle] = useState('');
	const [author_name, setAuthor] = useState('');

	const navigate = useNavigate();

	const { bookId } = useParams();
	console.log(bookId);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		console.log(title, author_name);

		const response = await fetch('http://localhost:8080/books/' + bookId, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
			},
			body: JSON.stringify({
				author_name,
				title,
			}),
		});

		console.log(response);

		navigate('/books');
	};

	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:8080/books/' + bookId, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
				},
			});
			const data = await response.json();
			setAuthor(data.author_name);
			setTitle(data.title);

			console.log(data);
		})();
	}, []);

	return (
		<form onSubmit={handleSubmit} className='space-y-2'>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='border border-gray-400 rounded px-2 py-1 mr-3'
			/>
			<input
				type='text'
				value={author_name}
				onChange={(e) => setAuthor(e.target.value)}
				className='border border-gray-400 rounded px-2 py-1 mr-3'
			/>

			<button
				type='submit'
				className='bg-blue-500 text-white px-4 py-2 rounded'
			>
				Update
			</button>
		</form>
	);
};

export default UpdateBookForm;

import React, { useState } from 'react';
import BookList from '../components/BookList';
import CreateBookForm from '../components/CreateBookForm';

const BooksPage: React.FC = () => {
	const [mainDataUpdated, setMainDataUpdated] = useState(false);
	const handleCreateBook = async (book: {
		title: string;
		author_name: string;
	}) => {
		// Create book using API function
		// Example implementation:
		console.log('Creating book:', book);

		const response = await fetch('http://localhost:8080/books/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
			},
			body: JSON.stringify(book),
		});

		setMainDataUpdated(!mainDataUpdated);

		window.location.reload();
		console.log(response);
	};

	return (
		<div className='container mx-auto'>
			<h2 className='text-3xl font-bold my-8'>Books</h2>
			<CreateBookForm onCreate={handleCreateBook} />
			<BookList mainDataUpdated={mainDataUpdated} />
		</div>
	);
};

export default BooksPage;

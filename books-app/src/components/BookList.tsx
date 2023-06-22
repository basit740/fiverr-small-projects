import React, { useState, useEffect, ChangeEvent } from 'react';
import BookItem from './BookItem';

interface Book {
	id: string;
	title: string;
	first_publish_year: number;
	number_of_pages_median: number;
	covers: {
		S: string;
		M: string;
		L: string;
	};
	author_name: string;
}

interface BookListProps {
	mainDataUpdated: boolean;
}

const BookList: React.FC<BookListProps> = ({ mainDataUpdated: boolean }) => {
	const [books, setBooks] = useState<Book[]>([]);
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [dataIsUpdated, setDataIsUpdated] = useState(false);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await fetch('http://localhost:8080/books', {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
					},
				});
				const data = await response.json();
				setBooks(data);
				setFilteredBooks(data);
			} catch (error) {
				console.error('Error fetching books:', error);
			}
		};

		fetchBooks();
	}, [dataIsUpdated]);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearchTerm(value);
		const filtered = books.filter((book) =>
			book.title.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredBooks(filtered);
	};

	const handleDelete = async (bookId: string) => {
		// Implement the delete logic here

		console.log(bookId);

		const response = await fetch('http://localhost:8080/books/' + bookId, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
			},
		});

		console.log(response);

		setDataIsUpdated(!dataIsUpdated);
	};

	return (
		<div>
			<input
				type='text'
				value={searchTerm}
				onChange={handleSearch}
				placeholder='Search by title'
				className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mt-5 mb-8'
			/>

			<ul>
				{filteredBooks.map((book) => (
					<BookItem key={book.id} book={book} onDelete={handleDelete} />
				))}
			</ul>
		</div>
	);
};

export default BookList;

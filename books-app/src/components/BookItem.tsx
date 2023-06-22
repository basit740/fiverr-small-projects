import React from 'react';

import { useNavigate } from 'react-router-dom';
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

interface BookItemProps {
	book: Book;
	onDelete: (id: string) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete }) => {
	const { id, title, author_name, covers } = book;

	const navigate = useNavigate();

	const handleDelete = () => {
		// Call the onDelete callback with the book id
		onDelete(id);
	};

	const handleUpdate = () => {
		navigate('/books/update/' + id);
	};

	return (
		<li className='border border-gray-200 rounded p-4 flex items-center space-x-4'>
			{covers && (
				<img src={covers.M} alt={title} className='w-16 h-16 rounded' />
			)}
			<div>
				<h3 className='text-lg font-bold'>{title}</h3>
				<p className='text-gray-600'>{author_name}</p>
				<button onClick={handleDelete} className='text-red-500 hover:underline'>
					Delete
				</button>

				<button
					onClick={handleUpdate}
					className='text-green-500 hover:underline'
				>
					Update
				</button>
			</div>
		</li>
	);
};

export default BookItem;

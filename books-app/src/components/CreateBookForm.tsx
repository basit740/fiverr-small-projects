import React, { useState } from 'react';

interface CreateBookFormProps {
	onCreate: (book: { title: string; author_name: string }) => void;
}

const CreateBookForm: React.FC<CreateBookFormProps> = ({ onCreate }) => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onCreate({ title, author_name: author });
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-2'>
			<input
				type='text'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='border border-gray-400 rounded px-2 py-1 mr-3'
			/>
			<input
				type='text'
				placeholder='Author'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				className='border border-gray-400 rounded px-2 py-1 mr-3'
			/>
			<button
				type='submit'
				className='bg-blue-500 text-white px-4 py-2 rounded'
			>
				Create
			</button>
		</form>
	);
};

export default CreateBookForm;

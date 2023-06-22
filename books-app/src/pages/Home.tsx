import React from 'react';

import { Link } from 'react-router-dom';
const Home: React.FC = () => {
	return (
		<div className='container mx-auto'>
			<h2 className='text-3xl font-bold my-8'>
				Welcome to the Book Management App
			</h2>
			<p className='text-lg text-gray-700 mb-10'>
				Explore and manage your book collection.
			</p>

			<Link to='/books' className='hover:underline mt-10'>
				Books
			</Link>
		</div>
	);
};

export default Home;

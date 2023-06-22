import React from 'react';
import './App.css';

import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Home from './pages/Home';
import UpdateBookForm from './components/UpdateBookForm';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/books' element={<BooksPage />} />
				<Route path='/books/update/:bookId' element={<UpdateBookForm />} />
			</Routes>
		</div>
	);
}

export default App;

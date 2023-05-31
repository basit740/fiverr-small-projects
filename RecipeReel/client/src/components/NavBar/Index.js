import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const Index = () => {
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
	const [categories, setCategories] = useState([]);

	const dispatch = useDispatch();

	const loggedIn = useSelector((state) => state.auth.loggedIn);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(
					process.env.REACT_APP_API_SERVER + '/api/categories'
				);
				console.log(response);
				setCategories(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchCategories();
	}, []);

	const toggleCategoryMenu = (e) => {
		e.preventDefault();
		setIsCategoryMenuOpen(!isCategoryMenuOpen);
	};

	const toggleSubMenu = () => {
		setIsSubMenuOpen(!isSubMenuOpen);
	};

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());

		setIsSubMenuOpen(false);
		window.location.href = '/login';
	};

	return (
		<header className='w-full shadow'>
			<div className='flex p-6 container mx-auto justify-between items-center'>
				<div className='left flex items-center'>
					<a href='/'>
						<h3
							className='text-slate-900 text-2xl font-bold mr-7'
							style={{ backgroundImage: 'none' }}
						>
							RecipeReel
						</h3>
					</a>
					<ul className='flex gap-5 align-baseline'>
						<li>
							<Link
								to='/categories'
								className='uppercase'
								onClick={toggleCategoryMenu}
							>
								Categories
							</Link>
							{isCategoryMenuOpen && (
								<ul
									className='absolute mt-2 bg-white border border-gray-300 rounded'
									style={{ zIndex: '100' }}
								>
									<div className='grid grid-cols-6 gap-4 p-4'>
										{categories.map((category) => (
											<li key={category.id}>
												<Link to={`/category/${category.id}`}>
													{category.title}
												</Link>
											</li>
										))}
									</div>
								</ul>
							)}
						</li>
						<li>
							<Link to='/top-rated' className='uppercase'>
								Top Rated
							</Link>
						</li>

						{loggedIn && (
							<li>
								<Link to='/recipies/add' className='uppercase'>
									CREATE POST
								</Link>
							</li>
						)}
					</ul>
				</div>
				<div className='right flex items-center gap-5'>
					<input
						type='text'
						placeholder='Search'
						className='border border-gray-300 px-4 py-2 rounded'
					/>
					<div className='relative'>
						<img
							src='https://placehold.co/400'
							alt='User Profile'
							className='rounded-full w-8 h-8 cursor-pointer'
							onClick={toggleSubMenu}
						/>
						{isSubMenuOpen && (
							<ul
								className='absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded'
								style={{ zIndex: '100' }}
							>
								{!loggedIn && (
									<>
										<li className='px-4 py-2'>
											<Link to='/register'>Register</Link>
										</li>
										<li className='px-4 py-2'>
											<Link to='/login'>Login</Link>
										</li>
									</>
								)}
								{loggedIn && (
									<>
										<li className='px-4 py-2'>
											<Link to='/profile'>Profile</Link>
										</li>
										<li className='px-4 py-2'>
											<Link to='/following'>Following</Link>
										</li>
										<li className='px-4 py-2'>
											<Link to='/favorites'>Favorites</Link>
										</li>
										<li className='px-4 py-2'>
											<Link to='/favorites' onClick={handleLogout}>
												Logout
											</Link>
										</li>
									</>
								)}
							</ul>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Index;

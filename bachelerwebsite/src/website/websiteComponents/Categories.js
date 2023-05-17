import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/reducers/categoriesSlice.js';
//context
import { CategoryContext } from '../context/CategoryContext';
//components
import Category from './Category';

const Categories = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories.categories);
	const status = useSelector((state) => state.categories.status);
	const error = useSelector((state) => state.categories.error);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	useEffect(() => {
		if (categories.length > 0) {
			console.log('Categories:', categories);
		}
	}, [categories]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>;
	}
	return (
		<section id='categories' className='py-24'>
			<div className='container mx-auto lg:px-0'>
				<div className='text-center'>
					<div className='font-tertiary uppercase text-[15px] tracking-[6px]'>
						Student Village Kamtjatka
					</div>
					<h2 className='font-primary text-[45px] mb-4'>Room categories</h2>
				</div>
				{/*grid*/}
				<div className='grid grid-cols-3 gap-4'>
					{categories &&
						categories.map((category) => {
							return <Category category={category} key={category.id} />;
						})}
				</div>
			</div>
		</section>
	);
};

export default Categories;

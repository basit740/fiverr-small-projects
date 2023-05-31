import React from 'react';

import HeroImg from '../../assets/images/hero.jpg';

import { useSelector } from 'react-redux';

const Hero = () => {
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	return (
		<section className='flex items-center container mx-auto mt-16'>
			<div className='flex-1 px-6 py-12'>
				{loggedIn ? (
					<h1 className='text-4xl font-bold mb-4'>
						Find Dishes that suits you!
					</h1>
				) : (
					<h1 className='text-4xl font-bold mb-4'>Welcome to RecipeReel</h1>
				)}
				<p className='text-lg text-gray-600 mb-6'>
					Discover and share your favorite recipes from around the world.
				</p>

				{loggedIn ? (
					<button className='border border-green-500 block hover:bg-green-600 hover:text-white text-green-600 font-bold py-2 px-4 rounded'>
						Explore popular
					</button>
				) : (
					<button className='bg-green-500 block hover:bg-green-600 hover:text-white text-white font-bold py-2 px-4 rounded'>
						Get Started
					</button>
				)}
			</div>
			<div className='flex-1'>
				<img
					src={HeroImg}
					alt='Banner'
					className='w-full h-auto border-r-8 overflow-hidden rouded rounded-md'
				/>
			</div>
		</section>
	);
};

export default Hero;

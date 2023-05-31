import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarRating from 'react-rating';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Recipe = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const currentUser = useSelector((state) => state.auth.user);

	const navigate = useNavigate();

	async function handleDeleteRecipe() {
		let url = process.env.REACT_APP_API_SERVER + `/api/recipies/${recipe.id}`;
		try {
			const token = localStorage.getItem('token');
			const response = await axios.delete(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response.data);

			navigate('/');
		} catch (error) {
			alert(error.message);
			console.error(error);
		}
	}

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_SERVER}/api/recipies/${recipeId}`
				);
				setRecipe(response.data);

				console.log(response.data);
				console.log(currentUser.id);
			} catch (error) {
				console.error('Error fetching recipe:', error);
			}
		};

		fetchRecipe();
	}, [recipeId]);

	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % recipe.images.length);
	};

	const handlePreviousImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? recipe.images.length - 1 : prevIndex - 1
		);
	};

	if (!recipe) {
		return <div>Loading...</div>;
	}

	const {
		recipeName,
		rating,
		ingredients,
		description,
		instructions,
		User,
		likes,
	} = recipe;

	return (
		<div className='container mx-auto mt-14'>
			<div className='flex'>
				<div className='w-2/3'>
					<div className='w-full h-96 bg-gray-200 rounded-lg mb-4 relative'>
						<img
							src={recipe.images[currentImageIndex]}
							alt='Recipe'
							className='w-full h-full object-cover rounded-lg'
						/>
						{recipe.images.length > 1 && (
							<>
								<button
									className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2'
									onClick={handlePreviousImage}
								>
									<i className='fas fa-chevron-left'></i>
								</button>
								<button
									className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2'
									onClick={handleNextImage}
								>
									<i className='fas fa-chevron-right'></i>
								</button>
							</>
						)}
					</div>
				</div>
				<div className='w-1/3 ml-4'>
					<div className='flex items-center mb-2'>
						<h2 className='text-2xl font-bold mr-2'>{recipeName}</h2>
						<StarRating
							initialRating={rating}
							emptySymbol={<i className='far fa-star text-yellow-400'></i>}
							fullSymbol={<i className='fas fa-star text-yellow-400'></i>}
							readonly
						/>
					</div>
					<div className='flex items-center mb-4'>
						<i className='fas fa-heart text-red-500 mr-2'></i>
						<span>{likes}</span>
					</div>
					<h3 className='text-lg font-bold mb-2'>Ingredients:</h3>
					<ul className='mb-4'>
						{ingredients.map((ingredient, index) => (
							<li key={index}>{ingredient}</li>
						))}
					</ul>
					<h3 className='text-lg font-bold mb-2'>Description</h3>
					<p className='mb-4'>{description}</p>
					<h3 className='text-lg font-bold mb-2'>Created by:</h3>
					<div className='flex items-center mb-4'>
						<h2
							style={{
								backgroundColor: getRandomColor(),
							}}
							className='bg-green-700 text-white rounded-full w-10 h-10 flex items-center align-middle justify-center font-bold text-xl mr-4'
						>
							{User.username.charAt(0)}
						</h2>
						<span>{User.username}</span>
						<button className=''>Follow</button>
					</div>
				</div>
			</div>
			<div>
				<h3 className='text-lg font-bold mb-2'>Instructions:</h3>
				<ol>
					{instructions.map((instruction, index) => (
						<li key={index}>{instruction}</li>
					))}
				</ol>

				{currentUser.id === recipe.User.id && (
					<div className='border-t-2 border-red-700 mt-8 flex justify-between py-2'>
						<p>DANGER ZONE</p>
						<button
							className='p-2 bg-red-600 rounded-md text-white'
							onClick={handleDeleteRecipe}
						>
							Delete Recipe
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Recipe;

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

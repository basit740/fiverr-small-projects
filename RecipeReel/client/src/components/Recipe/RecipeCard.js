import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const RecipeCard = ({ recipe }) => {
	const { recipeName, likes, rating, images, id } = recipe;

	const [currentImage, setCurrentImage] = useState(0);

	const nextImage = () => {
		setCurrentImage((prevImage) =>
			prevImage === images.length - 1 ? 0 : prevImage + 1
		);
	};

	const prevImage = () => {
		setCurrentImage((prevImage) =>
			prevImage === 0 ? images.length - 1 : prevImage - 1
		);
	};

	return (
		<div className='recipe-card-container w-72'>
			<div className='recipe-card bg-white rounded-lg shadow'>
				{/* <div className='h-48 overflow-hidden'>
					<img
						className='object-cover w-full h-full rounded-tl rounded-tr'
						src={images[0]}
						alt='Recipe'
					/>
				</div> */}

				<div className='h-48 overflow-hidden relative'>
					{images.length > 1 && (
						<button
							className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-600 hover:bg-gray-300 transition duration-300'
							onClick={prevImage}
						>
							<i className='fas fa-chevron-left'></i>
						</button>
					)}
					<button
						className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-gray-600 hover:bg-gray-300 transition duration-300'
						onClick={nextImage}
					>
						<i className='fas fa-chevron-right'></i>
					</button>
					<img
						className='object-cover w-full h-full rounded-tl rounded-tr transition-all'
						src={images[currentImage]}
						alt='Recipe'
					/>
				</div>
				<div className='p-4'>
					<Link to={`/recipies/${id}`}>
						<h3 className='text-lg font-semibold mb-2'>{recipeName}</h3>
					</Link>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							{Array.from(
								{ length: Math.floor(Number(rating)) },
								(_, index) => (
									<i
										key={index}
										className='fas fa-star text-yellow-500 mr-1'
									></i>
								)
							)}
							{Number.isInteger(Number(rating)) && (
								<i className='fas fa-star-half text-yellow-500 mr-1'></i>
							)}
						</div>
						<div className='text-red-500'>
							<i className='fas fa-heart mr-1'></i> {likes}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;

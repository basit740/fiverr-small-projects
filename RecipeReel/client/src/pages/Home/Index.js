import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import RecipeCard from '../../components/Recipe/RecipeCard';

const Index = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		// Fetch recipes from the server
		fetch(process.env.REACT_APP_API_SERVER + '/api/recipies')
			.then((response) => response.json())
			.then((data) => {
				setRecipes(data);
			})
			.catch((error) => console.error(error));
	}, []);
	return (
		<section claassName='home'>
			<Hero />

			<div className='popular-recipies container mx-auto mt-7 mb-10'>
				<h4 className='text-2xl text-center mb-5'>Popular Dishes</h4>

				<div className='popular-recipies__content flex gap-4 items-center'>
					{recipes.map((recipe) => (
						<RecipeCard key={recipe.id} recipe={recipe} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Index;

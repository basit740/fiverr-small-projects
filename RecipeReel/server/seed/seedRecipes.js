const { Recipe } = require('../db/index.js');
const seedRecipes = async () => {
	try {
		await Recipe.bulkCreate([
			{
				recipeName: 'Chocolate Chip Cookies',
				description: 'Delicious homemade chocolate chip cookies.',
				ingredients: [
					'1 cup butter',
					'1 cup sugar',
					'2 cups flour',
					'1 tsp vanilla extract',
					'1 cup chocolate chips',
				],
				instructions: [
					'1 cup butter',
					'1 cup sugar',
					'2 cups flour',
					'1 tsp vanilla extract',
					'1 cup chocolate chips',
				],
				likes: 10,
				rating: 4.5,
				images: [
					'https://i1.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/02/Chocolate-Chip-Cookies-3.jpg',
					'https://cookieandkate.com/images/2017/11/amazing-chocolate-chip-cookies-recipe-2.jpg',
				],
				dietaryRestrictions: ['Vegetarian'],
				categoryId: 1, // Assuming category ID for 'Desserts' is 1
				userId: 1, // Assuming user ID for 'John Doe' is 1
			},
			{
				recipeName: 'Chicken Parmesan',
				description:
					'Classic Italian dish made with breaded chicken and tomato sauce.',
				ingredients: [
					'2 boneless chicken breasts',
					'1 cup breadcrumbs',
					'1 cup marinara sauce',
					'1/2 cup grated Parmesan cheese',
				],
				instructions: [
					'1 cup butter',
					'1 cup sugar',
					'2 cups flour',
					'1 tsp vanilla extract',
					'1 cup chocolate chips',
				],
				likes: 5,
				rating: 4.2,
				images: [
					'https://www.lecremedelacrumb.com/wp-content/uploads/2017/01/baked-chicken-parmesan-101.jpg',
					'https://media1.popsugar-assets.com/files/thumbor/y1_0q_Pq2t5_-sqzgb5Z6aeciNY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/08/06/104/n/1922195/tmp_ORxCsR_4f196663f19cc227_1.jpg',
				],
				dietaryRestrictions: ['Lactose Intolerance', 'Gluten Intolerance'], // No specific dietary restrictions
				categoryId: 2, // Assuming category ID for 'Main Dishes' is 2
				userId: 2, // Assuming user ID for 'Jane Smith' is 2
			},
			// Add more recipes as needed
		]);

		console.log('Recipes seeded successfully');
	} catch (error) {
		console.error('Failed to seed recipes:', error);
	}
};

module.exports = seedRecipes;

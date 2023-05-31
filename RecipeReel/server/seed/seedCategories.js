const { Category } = require('../db/index.js');

const seedCategories = async () => {
	try {
		await Category.bulkCreate([
			{ title: 'African' },
			{ title: 'American' },
			{ title: 'Latin-American' },
			{ title: 'Asian' },
			{ title: 'Indian' },
			{ title: 'French' },
			{ title: 'Chinese' },
			{ title: 'Greek' },
			{ title: 'Middle-Eastern' },
			{ title: 'Spanish' },
			{ title: 'Mexican' },
			{ title: 'Italian' },
			{ title: 'Japanese' },
			{ title: 'Snacks' },
			{ title: 'Entrees' },
			{ title: 'Breakfast' },
			{ title: 'Lunch' },
			{ title: 'Dinner' },
			{ title: 'Sandwich' },
			{ title: 'Handheld' },
			{ title: 'Quick' },
			{ title: 'Comfort Food' },
			{ title: 'Seafood' },
			{ title: 'Special Occasion' },
		]);

		console.log('Categories seeded successfully');
	} catch (error) {
		console.error('Failed to seed categories:', error);
	}
};

module.exports = seedCategories;

const sequelize = require('sequelize');
const seedUsers = require('./seedUsers');
const seedCategories = require('./seedCategories');
const seedRecipes = require('./seedRecipes');

const db = require('../db/database');

// Load models
// const { User, Recipe, Category } = require('../db/index.js');

const seedData = async () => {
	await db.sync({ force: true }); // This will drop and recreate the tables
	await seedUsers();
	await seedCategories();
	await seedRecipes();

	// Additional seed functions as needed
};

// Call the seed function
seedData()
	.then(() => {
		console.log('Data seeding complete');
		process.exit();
	})
	.catch((error) => {
		console.error('Error seeding data:', error);
		process.exit(1);
	});

module.exports = seedData;

const { DataTypes } = require('sequelize');

const db = require('../database');
const Recipe = db.define('Recipe', {
	recipeName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	author: {
		type: DataTypes.STRING,
	},
	description: {
		type: DataTypes.TEXT,
	},
	ingredients: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	instructions: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	likes: {
		type: DataTypes.INTEGER,
	},
	rating: {
		type: DataTypes.DECIMAL(3, 2),
	},
	images: {
		type: DataTypes.ARRAY(DataTypes.STRING),
	},
	dietaryRestrictions: {
		type: DataTypes.ARRAY(DataTypes.STRING),
	},
});

module.exports = Recipe;

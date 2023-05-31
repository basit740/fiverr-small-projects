const { DataTypes } = require('sequelize');
const db = require('../database');
const Category = db.define('Category', {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Category;

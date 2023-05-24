const Sequelize = require('sequelize');

// const db = require('./db');
const db = require('../database');
const { DataTypes } = Sequelize;
// Campus model
const Campus = db.define('Campus', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	imageUrl: {
		type: DataTypes.STRING,
		defaultValue: 'default-campus-image.jpg',
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT('long'),
	},
});

module.exports = Campus;

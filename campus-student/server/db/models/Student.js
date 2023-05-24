const Sequelize = require('sequelize');

// const db = require('./db');
const db = require('../database');
const { DataTypes } = Sequelize;
// Student model
const Student = db.define('Student', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	imageUrl: {
		type: DataTypes.STRING,
		defaultValue: 'default-student-image.jpg',
	},
	gpa: {
		type: DataTypes.DECIMAL(3, 1),
		validate: {
			min: 0.0,
			max: 4.0,
		},
	},
});

module.exports = Student;

const { DataTypes } = require('sequelize');
const db = require('../database');

const User = db.define('User', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	username: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: true,
	},
});

// Define associations
User.associate = (models) => {
	User.hasMany(models.Recipe, { foreignKey: 'userId' });

	User.belongsToMany(models.User, {
		as: 'followers',
		through: 'UserFollowers',
		foreignKey: 'followingId',
		otherKey: 'followerId',
	});

	User.belongsToMany(models.User, {
		as: 'following',
		through: 'UserFollowers',
		foreignKey: 'followerId',
		otherKey: 'followingId',
	});
};

module.exports = User;

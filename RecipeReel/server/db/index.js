// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
// const Student = require('./models/Student');
// const Campus = require('./models/Campus');

const User = require('./models/User');
const Category = require('./models/Category');
const Recipe = require('./models/Recipe');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

// // Association

// Define associations

// User
User.hasMany(Recipe, { foreignKey: 'userId' });
User.belongsToMany(User, {
	as: 'followers',
	through: 'UserFollowers',
	foreignKey: 'followingId',
	otherKey: 'followerId',
});
User.belongsToMany(User, {
	as: 'following',
	through: 'UserFollowings',
	foreignKey: 'followerId',
	otherKey: 'followingId',
});
// CATEGORY
Category.hasMany(Recipe, { foreignKey: 'categoryId' });
/// RECIPE
Recipe.belongsTo(User, { foreignKey: 'userId' });
Recipe.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = {
	// Include your models in this exports object as well!
	db,
	User,
	Category,
	Recipe,
};

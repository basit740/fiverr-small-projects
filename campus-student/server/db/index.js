// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Student = require('./models/Student');
const Campus = require('./models/Campus');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

// Association
Campus.hasMany(Student, { foreignKey: 'campusId' });
Student.belongsTo(Campus, { foreignKey: 'campusId' });

module.exports = {
	// Include your models in this exports object as well!
	db,
	Student,
	Campus,
};

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const Sequelize = require('sequelize');

// // The name of the DB is the same as the package name "final-project"
// to be uncommented
// process.env.DATABASE_URL
const db = new Sequelize(
	'postgresql://postgres:raycast_admin89!@db.eipwnlvtghqzigcjaubu.supabase.co:5432/postgres',
	{
		logging: false,
	}
);

module.exports = db;

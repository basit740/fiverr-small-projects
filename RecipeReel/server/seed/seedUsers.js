const { User } = require('../db/index.js');

const seedUsers = async () => {
	try {
		await User.bulkCreate([
			{
				firstName: 'John',
				lastName: 'Doe',
				username: 'johndoe',
				password: 'password123',
				image:
					'https://www.perfectlyplacedcs.com/wp-content/uploads/2017/06/team-12-2-750x636.jpg',
			},
			{
				firstName: 'Jane',
				lastName: 'Smith',
				username: 'janesmith',
				password: 'password456',
				image:
					'https://thumbs.dreamstime.com/b/portrait-smiling-business-woman-professional-worker-isolate-isolated-white-background-female-model-41759810.jpg',
			},
			// Add more users as needed
		]);

		console.log('Users seeded successfully');
	} catch (error) {
		console.error('Failed to seed users:', error);
	}
};

module.exports = seedUsers;

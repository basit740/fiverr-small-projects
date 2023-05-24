const { db } = require('./server/db');
const Campus = require('./server/db/models/Campus');
const Student = require('./server/db/models/Student');

const seed = async () => {
	try {
		await db.sync({ force: true });

		// Seed campuses
		const campuses = await Campus.bulkCreate([
			{
				name: 'Campus 1',
				imageUrl:
					'https://www.travelandleisure.com/thmb/E5szi7N2r1eN-8b3vkl5STvWz9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/notre-dame-university-COLLEGECAMP0421-039ce0bfd40b4e429b825c6fb6ebfaa6.jpg',
				address: '123 Campus St',
				description: 'This is Campus 1',
			},
			{
				name: 'Campus 2',
				imageUrl:
					'https://www.aclu.org/sites/default/files/field_image/web17-collegecampus-socialshare-1200x628.jpg',
				address: '456 Campus St',
				description: 'This is Campus 2',
			},
			// Add more campuses as needed
		]);

		// Seed students
		const students = await Student.bulkCreate([
			{
				firstName: 'John',
				lastName: 'Doe',
				email: 'johndoe@example.com',
				imageUrl:
					'https://thumbs.dreamstime.com/b/successful-mexican-male-student-braces-classroom-university-166448604.jpg',
				gpa: 3.5,
				campusId: campuses[0].id, // Associate student with a campus
			},
			{
				firstName: 'Jane',
				lastName: 'Smith',
				email: 'janesmith@example.com',
				imageUrl:
					'https://st3.depositphotos.com/29384342/33698/i/450/depositphotos_336982452-stock-photo-student-success-successful-thumbs-up.jpg',
				gpa: 3.9,
				campusId: campuses[1].id, // Associate student with a campus
			},
			{
				firstName: 'Alex',
				lastName: 'Johnson',
				email: 'alexjohnson@example.com',
				imageUrl:
					'https://st2.depositphotos.com/1002314/7824/i/600/depositphotos_78247338-stock-photo-african-student-holds-books-in.jpg',
				gpa: 3.7,
				campusId: campuses[0].id, // Associate student with a campus
			},
			{
				firstName: 'Emily',
				lastName: 'Davis',
				email: 'emilydavis@example.com',
				imageUrl:
					'https://www.kindpng.com/picc/m/665-6656670_college-student-transparent-background-hd-png-download.png',
				gpa: 3.8,
				campusId: campuses[1].id, // Associate student with a campus
			},
			// Add more students as needed
		]);

		console.log('Seeding success!');
	} catch (err) {
		console.log('Oh no! Something went wrong while seeding!');
		console.error(err);
	} finally {
		db.close();
	}
};

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
	try {
		await seed();
		console.log('Seeding success!');
	} catch (err) {
		console.error('Oh noes! Something went wrong!');
		console.error(err);
	} finally {
		db.close();
	}
}

if (require.main === module) {
	runSeed();
}

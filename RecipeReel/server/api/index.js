/* all api here */
'use strict';

// const { router } = require('../app');

const router = require('express').Router();

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

/////////Write routes below/////////
// router.use('/campuses', require('./campuses'));
// router.use('/students', require('./students'));
router.use('/auth', require('./auth.js'));
router.use('/users', require('./users.js'));
router.use('/recipies', require('./recipies.js'));
router.use('/categories', require('./categories.js'));

/////////End of Routes/////////

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;

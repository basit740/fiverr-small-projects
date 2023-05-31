const router = require('express').Router();

const { User } = require('../db/index.js');

const { db } = require('../db/index.js');

const verifyToken = require('../middleware/verifyToken.js');
const upload = require('../middleware/upload.js');

// GET all users with followers and following information
router.get('/', async (req, res) => {
	try {
		const users = await User.findAll({
			include: [
				{
					model: User,
					as: 'followers',
					attributes: ['id', 'firstName', 'lastName'],
					required: false,
				},
				{
					model: User,
					as: 'following',
					attributes: ['id', 'firstName', 'lastName'],
					required: false,
				},
			],
			// attributes: {
			// 	include: [
			// 		[
			// 			User.sequelize.literal(
			// 				'(SELECT COUNT(*) FROM "UserFollowers" WHERE "UserFollowers"."userId" = "User"."id")'
			// 			),
			// 			'numberOfFollowers',
			// 		],
			// 		[
			// 			User.sequelize.literal(
			// 				'(SELECT COUNT(*) FROM "UserFollowings" WHERE "UserFollowings"."followingId" = "User"."id")'
			// 			),
			// 			'numberOfFollowing',
			// 		],
			// 	],
			// },
		});

		res.json(users);
	} catch (error) {
		console.error('Failed to fetch users:', error);
		res.status(500).json({ error: 'Failed to fetch users' });
	}
});

// GET a specific user by ID with followers and following information
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id, {
			include: [
				{
					model: User,
					as: 'followers',
					attributes: ['id', 'firstName', 'lastName'],
					required: false,
				},
				{
					model: User,
					as: 'following',
					attributes: ['id', 'firstName', 'lastName'],
					required: false,
				},
			],
			// attributes: {
			// 	include: [
			// 		[
			// 			User.sequelize.literal(
			// 				'(SELECT COUNT(*) FROM "UserFollowers" WHERE "UserFollowers"."userId" = "User"."id")'
			// 			),
			// 			'numberOfFollowers',
			// 		],
			// 		[
			// 			User.sequelize.literal(
			// 				'(SELECT COUNT(*) FROM "UserFollowings" WHERE "UserFollowings"."followingId" = "User"."id")'
			// 			),
			// 			'numberOfFollowing',
			// 		],
			// 	],
			// },
		});

		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ error: 'User not found' });
		}
	} catch (error) {
		console.error('Failed to fetch user:', error);
		res.status(500).json({ error: 'Failed to fetch user' });
	}
});

// CREATE a new user
router.post('/', async (req, res) => {
	const userData = req.body;
	try {
		const user = await User.create(userData);
		res.status(201).json(user);
	} catch (error) {
		console.error('Failed to create user:', error);
		res.status(500).json({ error: 'Failed to create user' });
	}
});

// PUT/update an existing user
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const userData = req.body;
	try {
		const user = await User.findByPk(id);
		if (user) {
			await user.update(userData);
			res.json(user);
		} else {
			res.status(404).json({ error: 'User not found' });
		}
	} catch (error) {
		console.error('Failed to update user:', error);
		res.status(500).json({ error: 'Failed to update user' });
	}
});

// DELETE an existing user
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id);
		if (user) {
			await user.destroy();
			res.json({ message: 'User deleted successfully' });
		} else {
			res.status(404).json({ error: 'User not found' });
		}
	} catch (error) {
		console.error('Failed to delete user:', error);
		res.status(500).json({ error: 'Failed to delete user' });
	}
});

// Follow a user
router.post('/:id/follow', verifyToken, async (req, res) => {
	const { id } = req.params;
	const followerId = req.userId;

	try {
		// Find the user being followed
		const userToFollow = await User.findByPk(id);
		if (!userToFollow) {
			return res.status(404).json({ error: 'User not found' });
		}

		// Find the follower user
		const follower = await User.findByPk(followerId);
		if (!follower) {
			return res.status(404).json({ error: 'Follower not found' });
		}

		// Add the follower to the user's followers list
		await userToFollow.addFollower(follower);

		// also add the the userToFollow in the follower following list
		await follower.addFollowing(userToFollow);

		res.json({ message: 'User followed successfully' });
	} catch (error) {
		console.error('Failed to follow user:', error);
		res.status(500).json({ error: 'Failed to follow user' });
	}
});

// Unfollow a user
router.post('/:id/unfollow', verifyToken, async (req, res) => {
	const { id } = req.params;
	const followerId = req.userId;
	try {
		// Find the user being unfollowed
		const userToUnfollow = await User.findByPk(id);
		if (!userToUnfollow) {
			return res.status(404).json({ error: 'User not found' });
		}

		// Find the follower user
		const follower = await User.findByPk(followerId);
		if (!follower) {
			return res.status(404).json({ error: 'Follower not found' });
		}

		// Remove the follower from the user's followers list
		await userToUnfollow.removeFollower(follower);

		// also remvove the the user from the follwer following list
		await follower.removeFollowing(userToUnfollow);

		res.json({ message: 'User unfollowed successfully' });
	} catch (error) {
		console.error('Failed to unfollow user:', error);
		res.status(500).json({ error: 'Failed to unfollow user' });
	}
});

// Update user's image
// Update user's image
router.put('/users/:id/image', verifyToken, async (req, res) => {
	const { id } = req.params;

	try {
		// Find the user
		const user = await User.findByPk(id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		// Check if an image file was uploaded
		if (!req.files || !req.files.image) {
			return res.status(400).json({ error: 'No image file provided' });
		}

		const imageFile = req.files.image;
		const imageFileName = `${user.id}-${Date.now()}.${imageFile.name
			.split('.')
			.pop()}`;

		// Save the image to the server
		// const imagePath = path.join(
		// 	__dirname,
		// 	process.env.SERVER_URL + '/images/users',
		// 	imageFileName
		// );

		const imagePath =
			process.env.SERVER_URL + '/public/images/users/' + imageFileName;
		imageFile.mv(imagePath, (error) => {
			if (error) {
				console.error('Failed to save user image:', error);
				return res.status(500).json({ error: 'Failed to save user image' });
			}
		});

		// Update the user's image URL
		user.image = `/images/users/${imageFileName}`;
		await user.save();

		res.json({ message: 'User image updated successfully', user });
	} catch (error) {
		console.error('Failed to update user image:', error);
		res.status(500).json({ error: 'Failed to update user image' });
	}
});

module.exports = router;

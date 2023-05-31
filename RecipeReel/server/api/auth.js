const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/index.js');
const verifyToken = require('../middleware/verifyToken.js');

// Register a new user
router.post('/register', async (req, res) => {
	const { firstName, lastName, username, password } = req.body;
	try {
		// Check if the username is already taken
		const existingUser = await User.findOne({ where: { username } });
		if (existingUser) {
			return res.status(400).json({ error: 'Username already exists' });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create the user
		const user = await User.create({
			firstName,
			lastName,
			username,
			password: hashedPassword,
		});

		res.status(201).json({ message: 'User registered successfully', user });
	} catch (error) {
		console.error('Failed to register user:', error);
		res.status(500).json({ error: 'Failed to register user' });
	}
});

// Login and generate token
router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	try {
		// Find the user by username
		const user = await User.findOne({ where: { username } });
		if (!user) {
			return res.status(401).json({ error: 'Invalid credentials' });
		}

		// Check if the password matches
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ error: 'Invalid credentials' });
		}

		// Generate JWT token
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
			expiresIn: process.env.JWT_EXPIRY,
		});

		res.json({ message: 'Login successful', user, token });
	} catch (error) {
		console.error('Failed to login:', error);
		res.status(500).json({ error: 'Failed to login' });
	}
});

router.get('/me', verifyToken, async (req, res) => {
	try {
		// Retrieve the current user ID from the authentication middleware
		const { userId } = req;

		// Find the user with the specified ID, including their followers and following
		const user = await User.findOne({
			where: { id: userId },
			include: [
				{
					model: User,
					as: 'followers',
					through: 'UserFollowers',
					foreignKey: 'followingId',
				},
				{
					model: User,
					as: 'following',
					through: 'UserFollowers',
					foreignKey: 'followerId',
				},
			],
		});

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		res.json(user);
	} catch (error) {
		console.error('Failed to fetch current user:', error);
		res.status(500).json({ error: 'Failed to fetch current user' });
	}
});

module.exports = router;

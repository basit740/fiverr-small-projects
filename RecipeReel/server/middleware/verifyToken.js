// verifyToken.js

const jwt = require('jsonwebtoken');

// Middleware to verify the JWT token
const verifyToken = (req, res, next) => {
	const token = req.headers.authorization?.split(' ')[1];

	if (!token) {
		return res.status(401).json({ error: 'Missing token' });
	}

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.userId = decodedToken.userId;
		next();
	} catch (error) {
		console.error('Failed to verify token:', error);
		res.status(401).json({ error: 'Invalid token' });
	}
};

module.exports = verifyToken;

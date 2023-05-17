import pg from 'pg';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const { Pool } = pg;
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api/product', async (req, res) => {
	try {
		let result = await pool.query('SELECT * FROM product');
		res.json(result.rows);
	} catch (err) {
		res.status(500).json({ message: `Something went wrong: ${err}` });
	}
});

// social
app.get('/api/socials', async (req, res) => {
	try {
		let result = await pool.query('SELECT * FROM socials');
		res.json(result.rows);
	} catch (err) {
		res.status(500).json({ message: `Something went wrong: ${err}` });
	}
});

// COMMENTED CODE to be used

// // specifications_Min
// app.get('/api/specifications_Min', async (req, res) => {
// 	try {
// 		let result = await pool.query('Select * FROM public."specifications_Min"');
// 		res.json(result.rows);
// 	} catch (err) {
// 		res.status(500).json({ message: `Something went wrong: ${err}` });
// 	}
// });

// //specifications_Recommended
// app.get('/api/specifications_Recommended', async (req, res) => {
// 	try {
// 		let result = await pool.query(
// 			'Select * FROM public."specifications_Recommended"'
// 		);
// 		res.json(result.rows);
// 	} catch (err) {
// 		res.status(500).json({ message: `Something went wrong: ${err}` });
// 	}
// });

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server listening on port ${process.env.PORT || 3000}`);
});

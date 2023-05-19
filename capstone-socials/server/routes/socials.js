import pg from 'pg';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const Router = express.Router();
// const { Pool } = pg;
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });

Router.get('/', async (req, res) => {
	//
	console.log(process.env.DATABASE_URL);
	try {
		let result = await pool.query('Select * FROM public."specifications_Min"');
		res.json(result.rows);
	} catch (err) {
		res.status(500).json({ message: `Something went wrong: ${err}` });
	}
});

export default Router;

// // // specifications_Min
// app.get('/api/specifications_Min', async (req, res) => {
// 	try {
// 		let result = await pool.query('Select * FROM public."specifications_Min"');
// 		res.json(result.rows);
// 	} catch (err) {
// 		res.status(500).json({ message: `Something went wrong: ${err}` });
// 	}
// });

const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

const fileUpload = require('express-fileupload');

// const volleyball = require('volleyball');
const app = express();

// static middleware
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parsing middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(cors());
//routes start here
app.use('/api', require('./api'));

//logging middleware
// app.use(volleyball);

// app.use(
// 	fileUpload({
// 		limits: { fileSize: 50 * 1024 * 1024 },
// 	})
// );

// Note that this option available for versions 1.0.0 and newer.
// app.use(
// 	fileUpload({
// 		useTempFiles: true,
// 		tempFileDir: '/tmp/',
// 	})
// );

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = app;

const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes start here
app.use('/api', require('./api'))

app.use(cors())
//logging middleware
app.use(volleyball)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;


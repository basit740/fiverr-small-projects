const app = require('./app.js');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
	path: path.join(__dirname, './config.env'),
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));

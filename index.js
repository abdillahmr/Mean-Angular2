const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('Couldnt connect with database')
	} else {
		console.log('Connected to database : '+ config.db)
	}
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
	console.log('Listening on Port 8080');
});








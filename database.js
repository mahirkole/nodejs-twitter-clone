var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.MONGO_URL);

var db = mongoose.connection;

//TODO: Hataları env türüne göre ekrana bas
db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));

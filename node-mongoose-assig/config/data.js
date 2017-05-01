
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost/test1";

var connectionOne = mongoose.createConnection(mongoURI);
connectionOne.on('connected',function(err,data) {
    console.log('Connected to First Database');
});
connectionOne.on('error',function(err,data) {
    console.log('Could not connect to Mongoose',err);
});

module.exports = connectionOne;
require('./../api/users/user.model');


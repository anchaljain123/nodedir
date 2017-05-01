var mongoose = require('mongoose');
var copymongoURI = "mongodb://localhost/test2";

console.log('connectionTwo page ----------');

module.exports = connectionTwo = mongoose.createConnection(copymongoURI);

connectionTwo.on('connected',function(err,data) {
    console.log('Connected to Second Database');
});
connectionTwo.on('error',function(err,data) {
    console.log('*Could not connect to Mongoose*',err);
});

require('./../api/users/user.model1');
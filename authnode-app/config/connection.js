const mongoose = require('mongoose');
var mongoURI = "mongodb://localhost/practice";


mongoose.connect(mongoURI);
(function () {
    mongoose.connection.on('open',function(err,data) {
        console.log('Connected to  Database....');
 });
    mongoose.connection.on('error',function(err,data) {
        console.log('Could not connect to Mongoose',err);
    });
})();
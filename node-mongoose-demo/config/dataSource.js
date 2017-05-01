
var mongoose = require('mongoose');
var copymongoURI = "mongodb://localhost/copydemo";
mongoose.createConnection(copymongoURI); //creating db
(function () {
    mongoose.connection.on('open',function(err,data) {
        console.log('Connected to Second Database');
    });
    mongoose.connection.on('error',function(err,data) {
        console.log('Could not connect to Mongoose',err);
    });
})();
module.exports = exports = mongoose;
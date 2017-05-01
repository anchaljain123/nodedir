const mongoose = require('mongoose');
//const assert = require('assert');
//var MongoClient = require('mongodb').MongoClient;
const mongoURI = "mongodb://localhost/prac1";
mongoose.connect(mongoURI); // to connect to ORM start mongod server first on cmdline
(function () {
    var db =mongoose.connection;
    db.on('open',(err,data)=>{
        if(err) console.log("Error",err);
        console.log("Connected to Database");
    });
    mongoose.connection.on('error',function (err,data) {
        if(err) console.log(err);

        console.log(">>>>>>>>Could not connect to Database");
    });
})();
/*MongoClient.connect(mongoURI, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});*/

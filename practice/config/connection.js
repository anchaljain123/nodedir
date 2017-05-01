const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost/test1";
mongoose.connect(mongoURI);
const db = mongoose.connection;

db.on('open',(err,data)=>{
    if(err) console.log(err);
    console.log("Connected to Database");
});

db.on('error',(err,data)=>{
    if(err) console.log(err);
    console.log("Could not connect to Database");
})

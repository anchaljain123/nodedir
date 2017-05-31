var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    username: {
        type: String,
    },
    email:String,
    profile:{

    }
});
module.exports = mongoose.model('User',userSchema); //creating Users collection

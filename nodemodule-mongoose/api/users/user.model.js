const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    userName:{
        require:true,
        type:String,
    },
    emailid:{
        type:Number,
    }
});
module.exports = mongoose.model('User',userSchema);
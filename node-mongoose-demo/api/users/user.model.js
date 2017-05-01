var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
userName: {
       type: String,
       required: true,
   },
   emailid: {
       type: Number,
    }

});
console.log('user.model page -------');
module.exports = mongoose.model('User',userSchema); //creating Users collection
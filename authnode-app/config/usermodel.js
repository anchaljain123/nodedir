var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({},{'strict':false});
module.exports = mongoose.model('user',userSchema); //creating Users collection

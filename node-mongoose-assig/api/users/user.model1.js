var mongoose = require('mongoose');
var connectionTwo = require('./../../config/dataSource');
var userSchema = new mongoose.Schema({
    grant_title:{
        type: String,
    },
    id:{
        type: Number,
    },
    total_amount:{
        type: String,
    }

});
module.exports = connectionTwo.model('copyUser', userSchema);



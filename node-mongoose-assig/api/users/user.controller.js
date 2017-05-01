var userService = require('./user.service');
var fs=require('fs');
console.log('user.controller --------------');
exports.insertDocuments = function(req,res) {
    var obj = JSON.parse(fs.readFileSync('userData.json', 'utf8'));
    userService.insertDocuments(obj,res);
};

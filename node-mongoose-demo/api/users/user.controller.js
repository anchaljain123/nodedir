var userService = require('./user.service');


exports.createUser = function(req,res,next) {
    var userData = req.body.data;
    userService.createUser(userData,res);
};
exports.updateUser = function(req,res,next) {
    const userName = req.params.userName;
    userService.updateUser(userName,res);
};

exports.getUser = function(req,res,next) {
    var userName = req.query;
    userService.getUser(userName,res);
};

exports.deleteUser = function(req,res,next) {
    var userName = req.params.userName;
    userService.deleteUser(userName,res);
};




const userService = require('./userservice');

exports.createUser = (req,res,next) =>{
    const userData = req.body.data;
    userService.createUser(userData,res);

};



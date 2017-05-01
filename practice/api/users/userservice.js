const User = require('./usermodel');

exports.createUser=function (userData,response) {
    User.create(userData,function (err,data) {
        if(err) console.log(err);
        else
        {
            console.log("Sucessfully inserted");
            response.send({msg:"Added User",result:data});
        }
    })
};
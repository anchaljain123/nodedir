var User = require('./user.model');

console.log('user.service page---------');
exports.findUser = function(res) {

    User.find({},function (err,data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
            res.send({user:data});
        }
    })

};
exports.createUser = (userData,response) => {
    User.create(userData,function (err,data) {
        if(err) console.log(err);
        else
        {
            console.log("Success");
            response.send({result:data})
        }
    })
  /*User.save(userData,(err,data)=>{
      if(err) console.log(err);
      else
      {
          console.log("successfully save");
            response.send(data);
      }


  })*/
}
exports.getUser = function(userName,res) {
    User.findOne(userName,function (err,data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{

            res.send({'msg':'found',user:data})
        }

    })

};

exports.updateUser = function(userName,res) {
    User.update(userName,{userName:'pooja'},function (err,data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
            res.send({'msg':'found',user:data})
        }

    })

};

exports.deleteUser = function(userName,res) {
    User.deleteOne(userName,function (err,data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
            res.send({'msg':'found',user:data})
        }

    })

};


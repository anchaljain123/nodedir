var User = require('./user.model');
var copyUser = require('./user.model1');

exports.insertDocuments = function (userData) {
    var counter = 0;
    for(i in userData) {
        User.create(userData[i], function (err, data) {
            if (err) {
                console.log({msg: "Something went wrong in post :", error: err});
            }
            else {
                counter++;
                console.log("Successfully Inserted Data:",data );
                if(counter%3==0)
                    copy()
            }
        })

    }

};
  function copy () {
    var resultDocuments;
    User.find({},function (err, data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
            resultDocuments = data;
            for(i in resultDocuments) {
                var obj = {
                    "grant_title": resultDocuments[i].grant_title,
                    "id": resultDocuments[i].id,
                    "total_amount": resultDocuments[i].total_amount,
                }
                copyUser.create(obj, function (err, data) {
                    if (err) {
                        console.log({msg: "Something went wrong in copying :", error: err});
                    }
                    else {
                        console.log("Successfully Copy Data:" ,data);
                    }
                })
            }
        }

    });

}








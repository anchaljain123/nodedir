/**
 * Created by anchal on 16/4/17.
 */
const async = require('async');
var task =[];
for(let i=1;i<=5;i++){
    task.push(function (cb) {
        console.log(i);
       cb(null,i)
    })
}

async.parallel(task,function (err,result) {
    if(err) console.log(err);
        console.log("<<<<<<<<<<<<<result",result);
})
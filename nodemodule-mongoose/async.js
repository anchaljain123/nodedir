/**
 * Created by anchal on 16/4/17.
 */
const async = require('async');
var task = [] ;
/*for(var i=0;i<5;i++){
    task.push(function(i){
        return function (cb) {
        console.log(i);
        cb(null,i)
    }}(i)
    )
}*/
for(let i =1;i<5;i++){
    task.push(function (cb) {
        cb(null,i)
    })
}
async.parallel(task,(err,result)=>{
    if(err) console.log(err);
  console.log(result,"====result ")
})
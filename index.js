var fs=require('fs');
var events=require('events');
var filename="./input.txt";

var readfileStream=fs.createReadStream(filename);
readfileStream.setEncoding('UTF8');
readfileStream.on('data',function(chunk){
  console.log(chunk,"---------buffer")
})


var eventEmitter = new events.EventEmitter();

eventEmitter.addListener('conn',arg1,function(){ //1stway
  console.log('default listener'+arg1)
});

eventEmitter.on('conn',function () {//2ndway
  console.log('After default listener',arg1);
})



module.exports=eventEmitter;

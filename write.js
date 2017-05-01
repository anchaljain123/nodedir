var fs=require('fs');
var filename="./input.txt";
var readfileStream=fs.createReadStream(filename,'UTF8');
var writefileStream=fs.createWriteStream('./output.txt','UTF8'); //overrides

readfileStream.on('data',function(chunk){//chunks after interval
  writefileStream.write(chunk);
})

readfileStream.on('end',function(){
  writefileStream.end();
  console.log('END')
})

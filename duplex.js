var fs=require('fs');
var filename="./input.txt";
var readfileStream=fs.createReadStream(filename,'UTF8');
var writefileStream=fs.createWriteStream('./duplex.txt','UTF8'); //overrides

readfileStream.pipe(writefileStream)

readfileStream.on('end',function(){
  writefileStream.end();
  console.log('END')
})

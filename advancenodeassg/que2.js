//Read data from 1 file and write to another file using streams
var fs=require('fs');
/*
var filename="./input";
var readfileStream=fs.createReadStream(filename,'UTF8');
var writefileStream=fs.createWriteStream('./output.txt','UTF8');

readfileStream.on('data',function(chunk){
    writefileStream.write(chunk);
})

readfileStream.on('end',function(){
    writefileStream.end();
    console.log('END')
});
*/

var readableStream = fs.createReadStream('input');
var writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
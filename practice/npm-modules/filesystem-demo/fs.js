const fs = require('fs');
const inputFilename = "./input";
const outputFilename ="./output.txt";
const outputFilename1 = "./outputt.txt";
const encodingType = 'UTF-8';
const chunksArray =[] ;
const readStream = fs.createReadStream(inputFilename,encodingType);
const writeStream = fs.createWriteStream(outputFilename1,encodingType);

/*fs.stat(inputFilename,(err,data)=>{
    if(err) console.log(err);
     console.log("Reading through readFileSync() : ",fs.readFileSync(inputFilename,encodingType));
});*/

/*fs.appendFile(inputFilename,'THis is data to be append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});*/

/*
readStream.on('data',(chunk)=>{
    chunksArray.push(chunk);

}).on('end', function () {

    let buffer = Buffer.from(chunksArray.join());
    fs.writeFile(outputFilename, buffer, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});*/

/*readStream.pipe(writeStream);*/

/*
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');*/

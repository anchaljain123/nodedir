
//Print all the files in a folder using node Js.
const fs = require('fs');
fs.readdir('/home/anchal/Desktop/Bootcampppt', function (err, files) {
console.log("files are :",files)
});
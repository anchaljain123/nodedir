//Write a file upload API and print the upload process on console
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
var chunks = [];
app.get('/',function (req, res) {
    res.sendFile(__dirname+'/fileupload.html');
});

app.post('/upload', function(req, res) {

    var size = (req.headers['content-length']);
    var pos = 0;
    req.on('data', function (chunk) {

        pos += chunk.length;
        chunks.push(chunk);
        var progress = (pos / size * 100);
        console.log('progress %d %', parseInt(progress)+"");

    }).on('end', function () {

        let buffer = Buffer.from(chunks.join());
        fs.writeFile('./fileuploadoutput.txt', buffer, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            console.log('progress 100%');
        });
    });
});

app.listen(5000, function() {
    console.log('Listening on port 5000');
});
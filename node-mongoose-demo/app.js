require('./config/data');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
require('./config/route')(app);
app.listen(port,function () {
    console.log('Listening to server @http://localhost:%d',process.env.PORT);
});

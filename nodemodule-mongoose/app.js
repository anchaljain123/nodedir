require('./config/dataSource');
var express = require('express');
const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.addListener('connection',()=>{
    console.log("bind the event listener")
});
eventEmitter.on('connection',()=>{
    console.log("listening in on method ")
});
eventEmitter.emit('connection');



console.log("filenamepath : ",__filename);
console.log("dirpath : ",__dirname)
console.log("arguments : "+process.argv +" \narguments array : "+ process.argv.slice(2));
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
require('./config/route')(app);
app.use('/user', router);

router.use(function (req, res, next) {

res.sendFile(__dirname+'/views/index.html');
    //console.log('hiiii');
    next();
});
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();

});
function errorHandler(err, req, res, next) {
 next(err);
};

app.use(errorHandler);
app.use('/user',express.static('views'));
/*
router.use('/user/:id', function (req, res, next) {
    res.send('Request Type:', req.method);
    next();
});
*/

app.listen(3000,function () {
    console.log('Listening to server @http://localhost:3000');
});


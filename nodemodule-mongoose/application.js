var async = require('async');
var express = require('express');
var app = express();

var trafficLightActions = {
    red: 'Stop',
    yellow: 'Wait',
    green: 'Go'
};
/*trafficLightActions.forEach(function(color, callback) {
    var action = trafficLightActions[color];
        foreachfn(action, function (err) {
            console.log('after foreachfn has executed');
        });
  //  callback();
});

var foreachfn = function (action, doneCallback) {
    console.log(action);
    setTimeout(function () {
        return doneCallback();
    }, 300);
};*/

/*

async.map(trafficLightActions, asyncfn);

function asyncfn() {

}*/

console.log("----------parallel-wd object ---------");
async.parallel({
    one: function(callback) {
        callback(null, 'abc');
    },
    two: function(callback) {
        setTimeout(function () {
            callback("hhhh");
        },3000);

    }
}, function(err, results) {
    if(err) console.log(err,"---error");
    console.log(" >>>parallel-wd object :  " , results);
});

console.log("----------parallel-wd array ---------");
async.parallel([
        function(callback) {
            setTimeout(function() {
                callback(null, 'one');
            }, 200);
        },
        function(callback) {
            setTimeout(function() {
                callback(null, 'two');
            }, 100);
        }
    ],
    function(err, results) {
        console.log("err-----",err);
        console.log(" >>>parallel-wd array :  " , results);
    });


console.log("----------each----------");
var eachdemo = ['anchal','jain','ttn',"meanteam",'n',"noida"];
async.each(eachdemo, function(item, callback) {
    console.log('Processing item : >>>>>> ' + item);

    if(item.length<4) {
        console.log('This item is less than 4');
        callback("item<4"); //throws error,null!=error ; if nt gvn error den at last else will b printed
    } else {
        console.log('item processed');
        callback();
    }
}, function(err) {
    if( err ) {
        console.log('A item failed to process for eachfn');
    } else {
        console.log('All items have been processed successfully for eachfn');
    }
});

console.log("----------series----------");
var tasks = [slowFunction, fastFunction];
async.series(tasks, function (err, result) {
    console.log( result, "After final call of async.series");
});
function fastFunction(cb) {
    setTimeout(function () {
        console.log("Entered in fast function.... !!!!");
        cb(null, {status: "Fast"});
    }, 1000);
}
function slowFunction(cb) {
    setTimeout(function () {
        console.log("Entered in slow function.... !!!!");
        cb(null, {status: "slow"});
    }, 3000);
}
var square = function (num, doneCallback) {
    console.log(num * num);
    setTimeout(function () {
        return doneCallback(null);
    }, 3000);
};

console.log("-------------waterfall--------------");
async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
   console.log(">>>>>>>result of waterfall :  ",result);
});
function myFirstFunction(callback) {
    callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
    callback(null,"three");
}
function myLastFunction(arg1, callback) {
    callback(null, 'done');
}


app.listen(3000,function () {
    console.log('Listening to server @http://localhost:3000');
});
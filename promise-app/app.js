'use strict';
var cheerio = require('cheerio');
require('./config/data');
var request = require('request');
var async = require('async');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var Feed = require('./api/users/user.model');
var xmlData = {};
var fs = require('fs');
var taskArray = [],taskArray1=[];

function Insertfeeds(resultJson) {

    return new Promise(function (resolve, reject) {

        for (let i in resultJson) {

            resultJson[i].map( (item) => {
                taskArray1.push((function (item) {
                    return function (cb) {
                        Feed.create(item, function (err, data) {
                            if (err) {
                                console.log("Something went wrong in post ",err);
                                cb(err);
                            }
                            else {
                                console.log(" Success ");
                                cb(data);
                            }
                        })
                    }
                })(item));
            })
        }

        async.parallel(taskArray1, function (err, finalResult) {

            if(err)  reject('error in insertion');

            console.log(finalResult.length,"============finalresult");

            resolve('inserted into db');
        })

    })
}

function openUrl(){
    let i = 0,linksObj = {},feed = ['countries','series','topplayers'];
    return new Promise((resolve,reject) => {

        request.get('http://www.espncricinfo.com/ci/content/rss/feeds_rss_cricket.html', function (err, response, body) {
            if (err) return console.error(err);
            var $ = cheerio.load(body);

            $('tbody tr td').each(function (key,data) {
                let linksArray = [];
                $(this).find('li').each(function (index,el) {
                    var href = $("a", this).attr('href');
                    linksArray.push(href);
                });
                linksObj[feed[i]] =linksArray;
                fs.writeFile('./cricketlinks.txt', JSON.stringify(linksObj), function(err, result) {
                });
                    i++;
            });
            if (Object.keys(linksObj).length == feed.length){
                resolve(linksObj);
            }
        });
    })
}

function readAllFeeds(linksObj) { //reading all links and saving data
    var seriesArray = [],tempArray = [];
    return new Promise(function (resolve, reject) {
        for (let i in linksObj) {

            if (i == 'countries') {

                linksObj[i].map((item) => {
                    taskArray.push((function (item) {
                        return function (callback) {
                            request({
                                method: 'GET',
                                url: item,
                            }, function (err, response, body) {
                                tempArray.push(body);
                                xmlData['countries']=tempArray;
                                callback();

                            })
                        }
                    })(item))
                })

            }
            if (i == 'series') {

                linksObj[i].map((item) => {

                    taskArray.push((function (item) {
                        return function (callback) {
                            request({
                                method: 'GET',
                                url: item,
                            }, function (err, response, body) {
                                seriesArray.push(body);

                                xmlData['series']=tempArray;
                                callback();

                            })
                        }
                    })(item))
                })
            }
            if (i == 'topplayers') {
                var topplayerArray = [];
                linksObj[i].map((item) => {

                    taskArray.push((function (item) {
                        return function (callback) {
                            request({
                                method: 'GET',
                                url: item,
                            }, function (err, response, body) {
                                topplayerArray.push(body);
                                xmlData['topplayers'] = tempArray;
                                callback();

                            })
                        }
                    })(item))
                })
            }
        }
        async.parallel(taskArray, function (err, finalResult) {
            resolve(xmlData);
        })

    })
}

 function  saveFeeds (data) {//parse xml to json

    var jsonDataObj = {},keys=0;

    return new Promise(function (resolve, reject) {
        for (let i in data) {
            keys++;
            var jsonData =[];
            for( let j =0 ;j<10;j++) {
                parser.parseString(data[i][j], function (err, result) {
                    if (err) console.log(err);
                    //console.log(">>>>>>>>>>>>>>>>>>res>>",result.rss.channel);
                    jsonData.push(result.rss.channel);
                });
            }

            jsonDataObj[i]=jsonData;
        }
        if (keys == 3) {
            resolve(jsonDataObj);
        }
    });

};


/*var prepareApiResponse = function (data) {
    var i = 0;
    // console.log(data, "---------------data");

    /!*var promise = new Promise(function (resolve, reject) {
     if (typeof data[i] == "object")
     {
     countXml++;
     console.log("hi")
     prepareApiResponse(data[i++])

     }
     else {

     resolve(countXml);
     console.log("bye")
     }

     });

     return promise.all;*!/
    let requests = data.map((item) => {
        return new Promise((resolve, reject) => {
            apiResponse(item, resolve);
        });
    })

    Promise.all(requests).then(() => {
        sendApiResponse(countXml)
    });

};

function apiResponse(feed, resolve) {
    var countXml = 0;
    if (typeof feed == "object") {
        countXml++;
        // console.log(countXml, "!!!!!!!!!!!countresponse")
        resolve(countXml);
    }

}


function sendApiResponse(data) {
    return new Promise(function (resolve, reject) {
        console.log(data);
        resolve('sent api response :');
    })
}*/

function apiController() {

       /* openUrl()
            .then((result) => {
            return readAllFeeds(result);
            })
            .then(saveFeeds)
            .then(function(result){
               return  Insertfeeds(result)
            })
            .then(function (result) {
                console.log("finished" + result)
            }).catch(function (err) {
            console.log(err)
        });*/

    /*Promise.all([readAllFeeds(),saveFeeds(),prepareApiResponse(),sendApiResponse()]).then(function () {
     console.log('finish');
     })*/

    openUrl()
        .then(readAllFeeds)
        .then(saveFeeds)
        .then(Insertfeeds)
        .then(function () {
        console.log("finished");
    })


}

apiController();
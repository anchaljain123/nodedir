const passport = require('passport');
const express = require('express');
//const userAuth = require('./user_localAuth/userAuth');
const app = express();

const appConfig = require('./app');
appConfig.appConfig(app);

var PORT = 3000;

app.listen(PORT, function() {
    console.log('Listening on port %d',PORT);
});

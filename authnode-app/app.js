require('./config/connection');
const passport = require('passport');
const bodyParser = require('body-parser');
const userAuth = require('./user_localAuth/userAuth');
const googleAuth = require('./user_oauth/user-googleOAuth2.0');
const session = require('express-session');

module.exports.appConfig=(app)=>{

    app.set('view engine', 'ejs');
    app.use(session({secret:'6786476467'}),passport.initialize(),passport.session());
    userAuth.authenticateUser();
    googleAuth.googleauth();
    app.use(bodyParser());
    require('./config/route')(app);
};





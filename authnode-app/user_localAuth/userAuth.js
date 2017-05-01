var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../config/usermodel');

module.exports.authenticateUser = () => {

    passport.use(new LocalStrategy(

        function(username, password, done) {

            User.findOne({username:username,password:password }, function (err, user) {

                if (err) { return done(err); }
                if (!user) { return done(null, false ,{msg:"Incorrect username"}); } //doesnt exists
                return done(null, user); //save in passport
            });
        }
    ));

passport.serializeUser(function(user, done) { //takeout userid from passport storage
    done(null, user['_id']);
});

passport.deserializeUser(function(id, done) { //match token ie id & returns complete userdata in req in cookies
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
}

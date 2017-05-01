
const passport = require('passport');
const  GoogleStrategy   = require( 'passport-google-oauth2' ).Strategy;
const  GOOGLE_CLIENT_ID      = "805823460987-d405qi784viv3dv2ca1pt077q0ia00bd.apps.googleusercontent.com"
    , GOOGLE_CLIENT_SECRET  = "VEUy7eF7kz9EFK3ff9Ofyom-";

module.exports.googleauth = () =>{
    passport.use(new GoogleStrategy({
            clientID:     GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/profilecb",

        },
        function(accessToken, refreshToken, profile, done) {
           /* User.findOrCreate({ googleId: profile.id  }, function(err, user) {
               // done(err, user);
            });*/
           console.log("profile---",profile)
        }
    ));


    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
}
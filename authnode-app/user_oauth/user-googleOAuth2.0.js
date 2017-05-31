const User = require('../config/usermodel');
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
        (token,refreshToken,profile,done)=>{
            User.findOne({'id':profile.id},(err,user) => {
                if(err){
                    done(err);
                }
                if(user) {

                    console.log(user,"======$$$$ old user=========")
                    return done(null,user);
                }
                else{
                    let newUser = new User();
                    newUser.id = profile.id;
                    newUser.username = profile.displayName;
                    newUser.email = profile.emails[0].value;
                    newUser.profile ={
                        googleDetails:profile._json,
                    }

                    console.log(newUser.profile,"======%%%new user=========")

                    newUser.save((err) => {
                        if (err){
                            return done(err);
                        }
                        return done(null, newUser);
                    });
                }
            })
        }
    ));


    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
}
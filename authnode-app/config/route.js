var passport = require('passport');
const path ='/home/anchal/Desktop/nodedir/authnode-app/views';
module.exports=(app) => {

    app.get('/', (req, res) => {
        res.sendFile(path+'/Home.html')
        }
    );

    app.get('/login', (req, res) => { //1st time
        res.sendFile(path+'/Login.html');
    });

    app.post('/login', passport.authenticate('local', {failureRedirect: '/login' ,
        successRedirect: "/profile"}));//,failureFlash:"error in authentication",successFlash:"Welcome"


    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile','email'] }));

    app.get('/profilecb', passport.authenticate('google', {failureRedirect: '/login' ,
        successRedirect: "/profile"}));

    app.get('/profile',(req,res)=>{
        if(req.isAuthenticated()){
            res.render('/home/anchal/Desktop/nodedir/authnode-app/views/userProfile.ejs',{username:req.user})
        }else{
            res.redirect('/login');
        }
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

    /*app.get('/auth/provider', passport.authenticate('provider'));
    app.get('/auth/provider/callback',
        passport.authenticate('provider', { successRedirect: '/',
            failureRedirect: '/login' }));
*/



};
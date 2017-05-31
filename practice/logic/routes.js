const path = '/home/ttn/Desktop/anchalbackup/Desktop/nodedir/practice/views';
const userLogic = require('../api/users/usercontroller');
module.exports.routing = (app)=>{

    app.get('/',(request,response)=>{
        response.sendFile(path+'/homePage.html');
    });

/*    app.get('/:uid',(req,res) =>{ //if used before aboutus , this will be called
        res.send('hi')
    });*/
    app.get('/aboutus',(req,res)=>{
        res.sendFile(path+'/aboutUs.html');
    });

    app.post('/user',userLogic.createUser);

    app.get('/user/:id', function (req, res, next) {
        // if the user ID is 0, skip to the next router
        if (req.params.id === '0') next('route');
        // otherwise pass control to the next middleware function in this stack
        else next()
    }, function (req, res, next) {
        // render a regular page
        res.render('regular')
    })


};

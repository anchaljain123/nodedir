require('./config/connection');
const bodyParser = require('body-parser');
const routers = require('./logic/routes');
const path = '/home/ttn/Desktop/anchalbackup/Desktop/nodedir/practice/views';

function testMiddleware(req,res,next) {
    console.log("--------------Testing--------------");
    req.requesttime = Date.now();
    next();
}
function errorHandler(err,req,res,next) {
    if(err) console.log(err.stack);
    next(err);
}
applicationConfig = (app,expressRouter) =>{

    app.use(bodyParser());
    expressRouter.use((req,res,next)=>{ //this will call obnly for '/contact' request
        console.log("first Middleware \n date",Date.now());
        next()
        //pass control to the next middleware function in this stack 
        //To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route. NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.
    });
    expressRouter.use((req,res,next)=>{
        console.log("second Middleware ");
        //next();
        next();
    });

    /*expressRouter.get('/birds',(req,res)=>{ //will work for /contact/birds
        res.send('not a valid page');
        next()
    });

    app.use(testMiddleware);*///this will be call everythym any hit goes


    app.use('/contact',expressRouter,(req,res)=>{
        console.log(req.requesttime+">>>>>>>>"); //TO GET VALUE FROM A MIDDLEWARE
        res.sendFile(path+'/homePage.html');
    }); //after 2 middleware it will go to the endpt.if specified

    app.get('/contact',(req,res)=>{
        res.sendFile(path+'/contactUs.html');
    });
    routers.routing(app);

    app.use(errorHandler,(req,res)=>{
        res.send("error");
    });
    app.use(testMiddleware);
};

exports.applicationConfig = applicationConfig;

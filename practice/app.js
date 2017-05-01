require('./config/connection');
const bodyParser = require('body-parser');
const routers = require('./logic/routes');
const path = '/home/anchal/Desktop/practice/views';

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
        next();
    });
    expressRouter.use((req,res,next)=>{
        console.log("second Middleware ");
        next();
    });

    expressRouter.get('/birds',(req,res)=>{
        res.send('not a valid page');
    });

    app.use(testMiddleware);//this will be call everythym any hit goes

    app.use('/contact',expressRouter,(req,res)=>{
        console.log(req.requesttime+">>>>>>>>"); //TO GET VALUE FROM A MIDDLEWARE
        res.sendFile(path+'/contactUs.html');
    }); //after 2 middleware it will go to the endpt.if specified

    app.get('/contact',(req,res)=>{
        res.sendFile(path+'/contactUs.html');
    });
    routers.routing(app);

    app.use(errorHandler,(req,res)=>{
        res.send("error");
    });
    app.use(testMiddleware); // this will nt call if router has ended the req-res cycle,
};

exports.applicationConfig = applicationConfig;

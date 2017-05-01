const Express = require("express");
const router = require('./router');
var bodyParser = require('body-parser');
const PORT = 3000;
const app = Express();//equivalent to http.createServer
//app.listen(PORT);
app.use(bodyParser.json());
function middleware(req, res, next) {

    if(req.query && req.query.id == '1')
    console.log("Entered app : ",req.query);
    else
        console.log("Error");
    next();
}
//app.use(middleware);
router(app);
app.use('/static',Express.static('views')); //forpublic srver //use-mapping

app.listen(PORT , () => {
    console.info('Server is running @http://localhost:%d',PORT); //connecting with server
});

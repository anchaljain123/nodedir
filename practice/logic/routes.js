const path = '/home/anchal/Desktop/practice/views';
const userLogic = require('../api/users/usercontroller');
module.exports.routing = (app)=>{

    app.get('/',(request,response)=>{
        response.sendFile(path+'/homePage.html');
    });

    app.get('/aboutus',(req,res)=>{
        res.sendFile(path+'/aboutUs.html');
    });

    app.post('/user',userLogic.createUser);



};

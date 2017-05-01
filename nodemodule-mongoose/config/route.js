var userController = require('../api/users/user.controller');
module.exports = (app) => {

    app.post('/user',userController.createUser);
    app.put('/user/:name',userController.updateUser);
    app.get('/user',userController.findUser);
    app.delete('/user/:name',userController.deleteUser);

};



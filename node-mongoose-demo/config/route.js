var userController = require('../api/users/user.controller');
module.exports = (app) => {

    app.post('/user',userController.createUser);
    app.put('/user/:name',userController.updateUser);
    app.get('/user',userController.getUser);
    app.delete('/user/:name',userController.deleteUser);

};


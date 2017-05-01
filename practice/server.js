const express = require('express');
const app = express();
const expressRouter = express.Router();
const PORT = 3000;
const appConfig = require('./app');

appConfig.applicationConfig(app,expressRouter);

app.listen(PORT,()=>{
    console.log("Server is listening at http://localhost:%d",PORT);
});
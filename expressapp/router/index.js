module.exports = (app) => {

    app.get('/',(req,res)=>{
        res.send('Hello World');
    });

    app.get('/users.json',(req,res)=>{
        res.send(JSON.stringify([
            { name: 'Anchal' },
            { name: 'Xyz' }
            ]));
    });




};
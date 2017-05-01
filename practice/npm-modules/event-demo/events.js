const events = require('events');

const eventEmitter = new events.EventEmitter();
eventEmitter.addListener('conn',()=>{
    console.log(Date.now())
});
eventEmitter.on('conn',()=>{
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
});
eventEmitter.emit('conn');
console.log("*****************************************");
/*
class myEmitter extends EventEmitter{
    constructor(){
        super();
    }

}
const eventEmitter  = new myEmitter();
eventEmitter.on('event',()=>{

});
eventEmitter.emit('event');*/
console.log("*****************************************");
const eventEmitter1 = new events.EventEmitter();
eventEmitter1.on('event',(a)=>{
    console.log(a,this)
});
eventEmitter1.emit('event','a');
console.log("*****************************************");
const myEmitter2 = new events.EventEmitter();
let m = 0,p=7;
myEmitter2.on('event', () => {
    console.log("m val :",++m);
});
myEmitter2.once('event', () => {
    console.log(p--,">>>>>>m value");
});
myEmitter2.emit('event');
myEmitter2.emit('event');
/*process.on('uncaughtException', (err) => {
    console.error('whoops! there was an error');
});*/
myEmitter2.on('error', (err) => {
    console.error('whoops! there was an error');
});
myEmitter2.emit('error', new Error('whoops!'));

console.log("*****************************************");
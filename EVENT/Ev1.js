const EventEmitter =require('events');
const myEmitter =new EventEmitter();

myEmitter.on('greet',()=>{
    console.log("hello");
    
})

myEmitter.emit('greet');
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error',"异常信息"); 
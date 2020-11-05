var events = require('events');
function getEmitter() {
    var emitter = new events.EventEmitter();
    emitter.emit('start');
    return emitter;
}
var myEmitter = getEmitter();
myEmitter.on("start", function () {
    console.log("Started");
});

// If we do not uncomment the following line, there will be no log
// myEmitter.emit('start');

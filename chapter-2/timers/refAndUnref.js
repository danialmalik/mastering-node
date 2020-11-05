var intervalId = setInterval(function () { console.log('will not run') }, 1000);
intervalId.unref();

// un-commenting this line will cause the interval above to execute
// intervalId.ref();


setTimeout(function () {
    console.log("now stop");
}, 100);
var intervalId = setInterval(function () {
    console.log("running")
}, 1);
intervalId.unref();

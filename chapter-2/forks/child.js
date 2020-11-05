// Access localhost:8080
process.on('message', function (msg, server) {
    console.log(msg);
    server.on('connection', function (socket) {
        socket.end('Child handled connection');
    });
});

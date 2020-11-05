setInterval(function () { }, 1e6); process.on('SIGINT', function () {
    // press ctrl+c
    console.log('SIGINT signal received');
    process.exit(1);
})


setInterval(function () { }, 1e6); process.on('SIGUSR1', function () {
    // use command `kill –s SIGUSR1 <PROCRESS_PID>`
    console.log('Got a signal!');
});

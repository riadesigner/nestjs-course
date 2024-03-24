(() => {
    const socket = io.connect('http://localhost:3000');

    socket.emit('produce-error');
    socket.on('error-info', console.log);
})();
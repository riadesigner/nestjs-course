(() => {
    const socket = io.connect('http://localhost:3000');

    socket.emit('version', console.log);
})();
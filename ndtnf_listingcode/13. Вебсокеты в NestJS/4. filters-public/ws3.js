(() => {
    const socket = io.connect('http://localhost:3000');

    socket.emit('get-date', console.log);
})();
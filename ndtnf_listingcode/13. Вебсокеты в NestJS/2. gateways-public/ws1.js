(() => {
    const socket = io.connect('http://localhost:3000');

    socket.emit('events');
    socket.on('events', (data) => console.log(data));
})();
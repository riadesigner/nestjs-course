(() => {
    const socket = io.connect('http://localhost:3000');

    socket.emit('get-age', { age: 81 });

    socket.on('age', data => {
        console.log({ data });
    });
})();
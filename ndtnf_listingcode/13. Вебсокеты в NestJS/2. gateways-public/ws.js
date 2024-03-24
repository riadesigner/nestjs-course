(() => {
    const socket = io.connect('http://localhost:3000');

    socket.emit('hello', answer => {
        console.log(answer);
    });

    socket.emit('message', { data: 'Hello' }, answer => {
        console.log(answer);
    });
})();
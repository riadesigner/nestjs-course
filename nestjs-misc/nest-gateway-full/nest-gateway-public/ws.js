(() => {
    const socket = io.connect('http://localhost:3000');

    document.addEventListener('click', ()=>{

        socket.emit('hello', answer => { 
            console.log('answer = ', answer, ' wow!');    
        });

        socket.emit('message', { data: 'Aloha!' }, answer => {
            console.log(answer);
        });

    });

})();
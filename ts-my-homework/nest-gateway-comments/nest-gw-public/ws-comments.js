
/**
 * По клику добавляется комментарий к книге в базу данных
 * и тут же возвращается количество всех комментариев к данной книге.
 * */

(()=>{

    const socket = io.connect('http://localhost:3000')

    document.addEventListener('click', addComment)    
    
    function addComment(){
        const arr = ['nice', 'good', 'awesome', 'fantastic'];
        const likeWord = arr[Math.floor(Math.random()*(arr.length-1))];        
        const comment = `${likeWord} book!`;         
        const bookId = Math.random()>.5 ? 'id_book_001' : 'id_book_002'; 
        
        socket.emit('createBookcomment', {bookId: bookId, comment: comment }, (data)=>{   
            console.log(data);
        });
        socket.emit('findAllBookcomments', bookId, (data)=>{   
            console.log(data);
        });        
    }

})();


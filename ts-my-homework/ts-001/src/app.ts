interface Book{
    name:string;
    isbn:string;
}

const book: Book = {
    name:"Title",
    isbn:"123"
}

const $container = document.getElementById('info');
if($container){
    $container.innerHTML = `Книга: ${book.name}, ${book.isbn}`;
}


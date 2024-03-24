interface Book{
    name:string;
    isbn:string;
}

const book: Book = {
    name:"Title",
    isbn:"123"
}

const $container = document.getElementById('info');

let d=10;
d = d++;

let n;
n+= 100;
n = 300;



if($container){
    const str = `Книга: ${book.name}, 
        ${book.isbn}, всего ${d}
        число страниц: ${n}
        `;
    $container.innerHTML = str;

}


// const l = d*d;
// console.log(`l = ${l}`);`~
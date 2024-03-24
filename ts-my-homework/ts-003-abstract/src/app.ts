interface iBook {
    title:string;
    description:string;
    authors:string;
    favorite?:string|null;
    fileCover?:string|null;
    fileName?:string|null;
}

abstract class aBooksRepository{
    // создание книги        
    createBook(book:Book):Book{ return book; }
    // получение книги по id    
    getBook(id:string):Book{ return; }
    //получение всех книг    
    getBooks():Array<Book>{ return []; }
    // обновление книги.
    updateBook(id:string):Book{ return;}
    // удаление книги
    deleteBook(id:string):boolean{ return Math.random()>0.5?true:false; }

}

class BooksRepository extends aBooksRepository{
    constructor(){
        super();
    }
}

class Book implements iBook {
    title:string;
    description:string;
    authors:string;
    favorite:string|null;
    fileCover:string|null;
    fileName:string|null;
    constructor(
        title:string,
        description:string,
        authors:string,
        favorite:string|null=null,
        fileCover:string|null=null,
        fileName:string|null=null){
            this.title = title;
            this.description = description;
            this.authors = authors;
            this.favorite = favorite;
            this.fileCover = fileCover;
            this.fileName = fileName;
    }
}


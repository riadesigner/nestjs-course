interface iBookDto {
    title:string;
    description:string;
    authors:string;
    favorite:string;
    fileCover:string;
    fileName:string;
    fileBook:string;
};

interface iBook{
    title:string;
    description:string;
    authors:string;
    favorite:string;
    fileCover:string;
    fileName:string;
}

abstract class iBookRepository{
    abstract getBookById(id:string):Promise<iBook|null>;
    abstract createBook(bookDto:iBookDto):Promise<iBook|null>;
    abstract getAllBooks():Promise<iBook[]|null>
} 

export {iBook, iBookDto, iBookRepository};
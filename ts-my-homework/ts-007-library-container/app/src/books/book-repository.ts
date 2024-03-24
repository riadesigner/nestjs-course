import 'reflect-metadata';
import {BookModel} from './book-db-model';
import {iBook, iBookDto, iBookRepository} from './book-abstract';
import { injectable } from 'inversify';

@injectable()
class BookRepository implements iBookRepository{

    constructor(){
        console.log('new BookRepository created');
    }

    getBookById(id:string):Promise<iBook|null>{
        return new Promise(async (res,rej)=>{ 
            try{
                const book = await BookModel.findOne({_id:id}).select('-__v');
                res(book);
            }catch(e){
                console.log(`not found book ${id}, ${e}`);
                res(null);
            }            
        })
    }
    createBook(bookDto:iBookDto):Promise<iBook | null>{
        return new Promise(async (res,rej)=>{ 
            try{                
                const newBook = new BookModel(bookDto);
                await newBook.save();
                res(newBook);
            }catch(e){
                console.log(`cant creating a book, ${e}`);
                res(null);
            }   
        })
    }

    getAllBooks():Promise<iBook[]|null>{
        return new Promise(async (res,rej)=>{ 
            try{
                const arrBooks = await BookModel.find().select('-__v');                
                res(arrBooks);
            }catch(e){
                console.log(`not found books ${e}`);
                res(null);
            }                        
        })
    }    
}



export {iBookRepository, BookRepository};  

import express from 'express';
import {container} from '../infrastructure/container';
import { BookRepository } from './book-repository';
import {iBook, iBookDto, iBookRepository} from './book-abstract';

const repo:iBookRepository = container.get(BookRepository);
const router = express.Router();

router.get('/book/:id', async(req,res)=>{
    const {id} = req.params;
    const book = await repo.getBookById(id);
    console.log('book',book)
    if(book!==null){
        res.send(`ok!, книга № ${id} <br><pre>${book}</pre>`);        
    }else{
        res.send(`no! книга ${id} не найдена`);
    }    
});

router.get('/book', async(req,res)=>{    
    const books = await repo.getAllBooks();    
    if(books!==null){
        res.send(`<pre>books = ${books}</pre>`);        
    }else{
        res.send("no, книг нет");
    }    
});

router.post('/book/create', async(req,res)=>{    
    const {title,description,authors,favorite,fileCover,fileName,fileBook} = req.body
    const bookDto:iBookDto = {
        title:title||"",
        description:description||"",
        authors:authors||"",
        favorite:favorite||"",
        fileCover:fileCover||"",
        fileName:fileName||"",
        fileBook:fileBook||""
    };    
    const book:iBook|null = await repo.createBook(bookDto);        
    if(book!==null){
        res.send(`ok!, книга добавлена ${book.title}`);
    }else{
        res.send(`ошибка добавления книги`);
    }    
});

export default router;
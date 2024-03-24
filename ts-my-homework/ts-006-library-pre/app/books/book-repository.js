const BookModel = require('./book-db-model');

const BookRepository = {
    getBookById:function(id){
        return new Promise(async (res,rej)=>{ 
            try{
                const book = await BookModel.findOne({_id:id}).select('-__v');
                res(book);
            }catch(e){
                console.log(`not found book ${id}, ${e}`);
                res(null);
            }            
        })
    },
    createBook:function(bookDto){
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
    },    
    getAllBooks:function(){
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



module.exports = {BookRepository};  
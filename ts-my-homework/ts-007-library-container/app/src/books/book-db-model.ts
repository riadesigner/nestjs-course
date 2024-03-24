import { Schema, model } from 'mongoose';
import { iBook } from '../books/book-abstract';

const bookSchema = new Schema<iBook>({
    title:{ type:String, required:true},
    description:{ type:String},
    authors:{ type:String},
    favorite:{ type:String},
    fileCover:{ type:String},
    fileName:{ type:String}            
});

const BookModel = model<iBook>('Book', bookSchema)
export {BookModel};


import { Container } from 'inversify';
import {BookRepository } from '../books/book-repository';
import  {iBookRepository} from '../books/book-abstract'

const container = new Container();

container.bind<iBookRepository>(BookRepository).toSelf();

export {container};
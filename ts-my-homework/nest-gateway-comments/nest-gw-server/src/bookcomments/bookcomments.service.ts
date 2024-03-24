import { Injectable } from '@nestjs/common';
import { CreateBookcommentDto } from './dto/create-bookcomment.dto';
import { UpdateBookcommentDto } from './dto/update-bookcomment.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookcommentsService {
  private readonly allcomments = [];

  create(dto: CreateBookcommentDto) {
    const bookComment = {
      id: uuidv4(),
      bookId: dto.bookId,
      comment: dto.comment,
    };
    this.allcomments.push(bookComment);
    return bookComment;
  }

  findAll(bookId: string) {
    const arrComments = this.allcomments.filter((data) => {
      return data.bookId === bookId;
    });
    return arrComments;
  }

  findOne(id: string) {
    return this.allcomments[id];
  }

  update(id: string, dto: UpdateBookcommentDto) {
    const idx = this.allcomments.findIndex((data) => {
      return data.id === id;
    });
    if (idx === -1) return null;
    const bookComment = this.allcomments[idx];
    bookComment.comment = dto.comment;
    return bookComment;
  }

  remove(id: string): boolean {
    const idx = this.allcomments.findIndex((data) => {
      return data.id === id;
    });
    if (idx === -1) return null;
    this.allcomments.splice(idx, 1);
    return true;
  }
}

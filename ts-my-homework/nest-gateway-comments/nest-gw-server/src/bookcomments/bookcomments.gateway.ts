import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { BookcommentsService } from './bookcomments.service';
import { CreateBookcommentDto } from './dto/create-bookcomment.dto';
import { UpdateBookcommentDto } from './dto/update-bookcomment.dto';

@WebSocketGateway({ cors: true })
export class BookcommentsGateway {
  constructor(private readonly bookcommentsService: BookcommentsService) {}

  @SubscribeMessage('createBookcomment')
  addComment(@MessageBody() dto: CreateBookcommentDto) {
    return this.bookcommentsService.create(dto);
  }

  @SubscribeMessage('findAllBookcomments')
  getAllComments(@MessageBody() bookId: string) {
    return this.bookcommentsService.findAll(bookId);
  }

  @SubscribeMessage('findOneBookcomment')
  findComment(@MessageBody() id: string) {
    return this.bookcommentsService.findOne(id);
  }

  @SubscribeMessage('updateBookcomment')
  updateComment(@MessageBody() dto: UpdateBookcommentDto) {
    return this.bookcommentsService.update(dto.id, dto);
  }

  @SubscribeMessage('removeBookcomment')
  removeComment(@MessageBody() id: string) {
    return this.bookcommentsService.remove(id);
  }
}

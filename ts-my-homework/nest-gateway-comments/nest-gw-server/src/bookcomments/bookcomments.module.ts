import { Module } from '@nestjs/common';
import { BookcommentsService } from './bookcomments.service';
import { BookcommentsGateway } from './bookcomments.gateway';

@Module({
  providers: [BookcommentsGateway, BookcommentsService],
})
export class BookcommentsModule {}

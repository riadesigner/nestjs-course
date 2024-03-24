import { BookcommentEntity } from './entities/bookcomment.entity';

export class BookCommentModel implements BookcommentEntity {
  id: string;
  bookId: string;
  comment: string;
}

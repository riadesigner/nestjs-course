import { Test, TestingModule } from '@nestjs/testing';
import { BookcommentsService } from './bookcomments.service';

describe('BookcommentsService', () => {
  let service: BookcommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookcommentsService],
    }).compile();

    service = module.get<BookcommentsService>(BookcommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

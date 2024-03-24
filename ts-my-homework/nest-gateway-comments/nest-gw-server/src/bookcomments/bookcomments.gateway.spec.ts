import { Test, TestingModule } from '@nestjs/testing';
import { BookcommentsGateway } from './bookcomments.gateway';
import { BookcommentsService } from './bookcomments.service';

describe('BookcommentsGateway', () => {
  let gateway: BookcommentsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookcommentsGateway, BookcommentsService],
    }).compile();

    gateway = module.get<BookcommentsGateway>(BookcommentsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

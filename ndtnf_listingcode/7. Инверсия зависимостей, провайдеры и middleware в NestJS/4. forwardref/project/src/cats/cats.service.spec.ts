import { Test, TestingModule } from '@nestjs/testing';
import {CatsController} from "./cats.controller";
import {CatsService} from "./cats.service";
import {CommonService} from "./common.service";
import {Sphynx} from "./data/sphynx";

describe('CatsService', () => {
    let catsService: CatsService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [CatsService, CommonService],
            exports: [CatsService]
        }).compile();

        catsService = await app.resolve<CatsService>(CatsService);
    });

    describe('root', () => {
        it('adds a cat', () => {
            const cat = new Sphynx;
            catsService.create(cat);
            const cats = catsService.findAll();
            expect(cats).toHaveLength(1);
        });
    });
});

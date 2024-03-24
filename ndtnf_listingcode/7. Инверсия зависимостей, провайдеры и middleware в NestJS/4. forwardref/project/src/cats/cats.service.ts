import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CommonService } from "./common.service";

@Injectable()
export class CatsService {
    constructor(
        @Inject(forwardRef(() => CommonService))
        private readonly commonService: CommonService
    ) {

    }
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}

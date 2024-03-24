import { Injectable, Scope } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable({
    scope: Scope.TRANSIENT
})
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}

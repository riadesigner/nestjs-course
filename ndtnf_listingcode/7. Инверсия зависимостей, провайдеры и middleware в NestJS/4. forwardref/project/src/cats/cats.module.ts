import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CommonService } from "./common.service";

@Module({
    controllers: [CatsController],
    providers: [CatsService, CommonService],
    exports: [CatsService]
})

export class CatsModule {}

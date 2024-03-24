import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookcommentsModule } from './bookcomments/bookcomments.module';

@Module({
  imports: [BookcommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

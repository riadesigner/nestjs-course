import { 
  Inject, 
  Logger, 
  MiddlewareConsumer, 
  Module, 
  NestModule 
} from '@nestjs/common';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import * as session from 'express-session';
import * as passport from 'passport';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          // store: new (RedisStore(session))({ client: this.redis, logErrors: true }),
          saveUninitialized: false,
          secret: 'sup3rs3cr3t',
          resave: false,
          cookie: {
            sameSite: true,
            httpOnly: false,
            maxAge: 60000,
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}

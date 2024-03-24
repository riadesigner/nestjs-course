import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT;

async function bootstrap() {
  console.log(`STARTED NESTJS ON PORT ${PORT}`);
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();

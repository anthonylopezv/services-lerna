


import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '157.230.212.28',
      port: 1337,
      retryAttempts: 5,
      retryDelay: 3000,
    }
  })
  await app.startAllMicroservicesAsync();
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();



import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ApplicationModule } from './app.module';

import { HOST_TCP, PORT_TCP } from "./app.constant";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: HOST_TCP,
      port: PORT_TCP,
      retryAttempts: 5,
      retryDelay: 3000,
    }
  })
  await app.startAllMicroservicesAsync();
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
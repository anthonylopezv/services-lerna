

import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";

import { UserModule } from "user-service-mdl";

import { AppController } from "./app.http.controller";
import { AppService } from "./app.service";

import { USER_SERVICE_HOST, USER_SERVICE_PORT } from "./app.constant";

@Module({
  imports: [
    AuthModule,
    UserModule.forRoot({
      host: USER_SERVICE_HOST,
      port: USER_SERVICE_PORT,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule {}
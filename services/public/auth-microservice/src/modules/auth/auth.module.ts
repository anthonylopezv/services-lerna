

import { Module } from "@nestjs/common";

import { AuthController } from "./auth.controller";

import { UserModule } from "user-service-mdl";

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from "./auth.service";

import { SECRET_KEY, USER_SERVICE_HOST, USER_SERVICE_PORT } from "../../app.constant";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: SECRET_KEY,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule.forRoot({
      host: USER_SERVICE_HOST,
      port: USER_SERVICE_PORT,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
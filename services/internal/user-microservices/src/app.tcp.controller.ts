
import { Controller } from "@nestjs/common";

import { MessagePattern } from "@nestjs/microservices";

import { AppService } from "./app.service";

@Controller()
export class AppControllerTCP {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cnd: 'CONNECT_USER_MICROSERVICE' })
  getHello(): string {
    return this.appService.getHello();
  }
}
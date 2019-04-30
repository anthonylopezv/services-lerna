
import { Body, Controller } from '@nestjs/common';

import { MessagePattern } from '@nestjs/microservices';

import { UsersService } from './user.service';

import { CreateUserDto } from "../../models/dto/create-user.dto";
import { User } from '../../models/entity/user.interface';

@Controller()
export class UsersController{
  constructor(private readonly usersService: UsersService) {}
  
  @MessagePattern({ cmd: 'CREATED_USER' })
  async createdUser(@Body() createdUserDto: CreateUserDto) {
    return await this.usersService.createdUser(createdUserDto);
  }

  @MessagePattern({ cmd: 'FIND_USERS' })
  async findUsers(): Promise<User[]> {
    return await this.usersService.findUsers();
  }

  @MessagePattern({ cmd: 'FIND_USER' })
  async findUser(@Body() username: string) {
    return await this.usersService.findUser(username);
  }
} 

import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../../models/interfaces/user.interface';
import { CreateUserDto } from '../../models/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createdUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findUser(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username });
    return user;
  }
} 
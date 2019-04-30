
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/user/user.module';

import { MLAB_URI } from "./app.constant";

@Module({
  imports: [
    MongooseModule.forRoot(MLAB_URI, {
      useNewUrlParser: true,
    }),
    UsersModule,
  ],
})
export class ApplicationModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin2019@ds147436.mlab.com:47436/db-user-service', {
      useNewUrlParser: true,
    }),
    UsersModule,
  ],
})
export class ApplicationModule {}
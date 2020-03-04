import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { model } from 'mongoose';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([
  User,
  Course,
  Episode
])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/videoplatform', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}

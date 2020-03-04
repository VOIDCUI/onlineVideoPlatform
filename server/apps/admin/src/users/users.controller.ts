import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { User } from '@libs/db/models/user.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@Crud({
    model: User
  })
  @Controller('user')
  @ApiTags('用户')
  export class UsersController {
    constructor(@InjectModel(User) private readonly model) {}
  
  }

import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.model';
import { LoginDto } from './dto/login.dto ';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiTags('用户')
export class AuthController {
    constructor(
        @InjectModel(User) private userModel: ReturnModelType<typeof User>
    ){}

    @Post('register')
    @ApiOperation({ summary: '注册'})
    async register(@Body() dto: RegisterDto) {
        const {username,password} = dto;
        const user = await this.userModel.create({
            username,
            password
        })
        return user
    }

    @Post('login')
    @ApiOperation({ summary: '登陆'})
    @UseGuards(AuthGuard('local'))
    async login(@Body() dto:LoginDto, @Req() req){
        return req.user
    }
}

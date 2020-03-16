import { ApiProperty, ApiTags } from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty()
    username: string
    @ApiProperty()
    password: string
}
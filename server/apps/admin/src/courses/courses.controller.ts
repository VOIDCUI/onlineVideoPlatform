import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/models/course.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: Course
})
@ApiTags('课程')
@Controller('courses')
export class CoursesController {
    constructor(
        @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
    ){}
}

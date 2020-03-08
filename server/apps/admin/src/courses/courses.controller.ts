import { Controller, Get } from '@nestjs/common';
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

    @Get('option')
    option() {
        return {
            title:'课程管理',
            column: [
               {prop: 'name',  label: "课程名称", sortable: true, search: true ,regex: true, row: true},
               {prop: 'cover',  label:  "课程封面" ,type: 'upload', width: 120, listType:'picture-img' , row: true, action: 'upload'}
               ]
          }
    }
}

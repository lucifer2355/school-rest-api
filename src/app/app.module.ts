import { Module } from '@nestjs/common';

import { StudentController } from '../controller/student/strudent.controller';
import { TeacherController } from '../controller/teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController],
})
export class AppModule {}

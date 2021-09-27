import { Module } from '@nestjs/common';
import { StudentController } from '../controller/student/strudent.controller';

@Module({
  imports: [],
  controllers: [StudentController],
})
export class AppModule {}

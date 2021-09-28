import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller()
export class TeacherController {
  @Get()
  getAllTeachers() {
    return 'Get all teachers';
  }

  @Get('/:teacherId')
  getTeacher() {
    return 'Get teacher';
  }

  @Post()
  createTeacher() {
    return 'Create teacher';
  }

  @Put()
  updateTeacher() {
    return 'Update teacher';
  }
}

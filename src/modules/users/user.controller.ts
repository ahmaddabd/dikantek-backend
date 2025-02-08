import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }

  @Post('create')
  async create(@Body() body: any) {
    return this.userService.create(body);
  }

  @Patch('update-role/:id')
  async updateRole(@Param('id') id: number, @Body() body: any) {
    return this.userService.updateRole(id, body.role);
  }
}
import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { iCreateUserDto, iUpdateUserDto } from './users.abstract';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getAll() {
    const users = await this.usersService.getAllUsers();
    return users;
  }
  @Get(':id')
  public async getById(@Param('id') id: string) {
    const user = await this.usersService.getById(id);
    return user;
  }
  @Post()
  public async addOne(@Body() dto: iCreateUserDto) {
    const user = await this.usersService.addUser(dto);
    return user;
  }
  @Put(':id')
  public async updateOne(@Param('id') id: string, @Body() dto: iUpdateUserDto) {
    const user = await this.usersService.updateById(id, dto);
    return user;
  }
}

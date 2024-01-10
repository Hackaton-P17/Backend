import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { PostUserDto } from "./Dtos/postUser.dto";
import { DeleteUserDto } from "./Dtos/deleteUser.dto";
import { PatchUserDto } from "./Dtos/patchUser.dto";
import { ApiTags } from "@nestjs/swagger";


@Controller('user')
@ApiTags('user')
export class UserController{

    constructor(private readonly userService : UserService){}

    @Post()
  async create(@Body() postUser: PostUserDto) {
    await this.userService.create(postUser);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UserEntity> {
    return await this.userService.getUserById(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() userDto: PatchUserDto) {
    await this.userService.patchUser(id, userDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string,@Body() userDto : DeleteUserDto): Promise<boolean> {
    return await this.userService.deleteOneById(id, userDto);
  }

  @Get()
  async findAll() : Promise<UserEntity[]>{
    return await this.userService.getUsers();
  }

}
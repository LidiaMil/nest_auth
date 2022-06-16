import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get info about all users' })
  @ApiResponse({ status: 200, description: 'Successfully updated schema.' })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  async getUsers() {
    return this.usersService.findAll({});
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 200,
    description: 'Successfully created schema.',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  async create(
    @Body() createUserDto: { id?: string; username: string; password: string },
  ): Promise<null> {
    await this.usersService.create(createUserDto);
    return null;
  }
}

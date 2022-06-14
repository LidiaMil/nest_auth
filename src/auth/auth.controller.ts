import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MyHttpException } from 'src/error/error';
import { ErrorCode } from 'src/error/error.code';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, description: 'Successfully updated schema.' })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  async login(@Request() req) {
    if (!req.user) {
      throw new MyHttpException({
        errorCode: ErrorCode.LoginError.CODE,
      });
    }
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get info about me' })
  @ApiResponse({ status: 200, description: 'Successfully updated schema.' })
  @ApiResponse({ status: 400, description: 'Missing or invalid request body.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Schema not found.' })
  @ApiResponse({ status: 500, description: 'Internal error.' })
  getProfile(@Request() req) {
    return req.user;
  }
}

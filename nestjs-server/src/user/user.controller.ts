import { UserSignupDTO } from './dto/index';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userSertvice: UserService) {}

  @Post('signup')
  async signup(@Body() data: UserSignupDTO) {
    return await this.userSertvice.signup(data.username, data.password);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getUser(@Req() req) {
    return await this.userSertvice.getUserData(req.user._id);
  }
}

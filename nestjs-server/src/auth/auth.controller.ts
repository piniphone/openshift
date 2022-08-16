import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';

class AuthLoginDTO {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: AuthLoginDTO })
  @UseGuards(LocalAuthGuard)
  async login(@Req() req) {
    return await this.authService.jwtSign(req.user);
  }
}

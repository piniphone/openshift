import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.login(username, password);
    return user;
  }

  async jwtSign(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user._id,
      }),
    };
  }
}

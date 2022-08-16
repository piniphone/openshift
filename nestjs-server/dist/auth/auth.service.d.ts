import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.schema';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    jwtSign(user: User): Promise<{
        access_token: string;
    }>;
}

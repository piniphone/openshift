import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsOptional, IsEmail, MinLength } from 'class-validator';

export class UserLoginDTO {
  @ApiProperty()
  @IsDefined()
  @IsEmail()
  username: string;

  @ApiProperty()
  @IsDefined()
  @MinLength(8)
  password: string;
}

export class UserSignupDTO extends UserLoginDTO {
  @ApiProperty()
  @IsOptional()
  name?: string;
}

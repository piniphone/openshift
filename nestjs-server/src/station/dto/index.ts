import { ApiProperty } from '@nestjs/swagger';
import { MinLength, IsDefined, IsOptional } from 'class-validator';

export class StationUpdateDTO {
  @ApiProperty()
  @IsDefined()
  @MinLength(5, { message: 'CUSTOM_ERR_MIN_5' })
  readonly name: string;

  @ApiProperty()
  @IsOptional()
  @MinLength(5)
  readonly directions?: string;
}

export class StationCreateDTO {
  @ApiProperty()
  @IsDefined()
  @MinLength(5, { message: 'CUSTOM_ERR_MIN_5' })
  readonly name: string;

  @ApiProperty()
  @IsOptional()
  @MinLength(5)
  readonly directions?: string;
}

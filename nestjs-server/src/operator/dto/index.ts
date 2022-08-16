import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';

export class OperatorUpdateDTO {
  @ApiProperty()
  @IsDefined()
  readonly name: string;
}

export class OperatorCreateDTO extends OperatorUpdateDTO {}

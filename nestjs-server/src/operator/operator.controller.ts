import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { OperatorService } from './operator.service';
import { Operator } from './operator.schema';
import { OperatorCreateDTO, OperatorUpdateDTO } from './dto';

@ApiBearerAuth()
@ApiTags('operator')
@Controller('operator')
export class OperatorController {
  constructor(private readonly operatorService: OperatorService) {}

  @Post()
  async createOperator(@Body() body: OperatorCreateDTO): Promise<Operator> {
    return await this.operatorService.create(body);
  }

  @Put(':id')
  async updateOperator(
    @Body() body: OperatorUpdateDTO,
    @Param('id') id: number,
  ): Promise<Operator | null> {
    console.log('id', id);
    console.log('body', body);
    return null;
  }
}

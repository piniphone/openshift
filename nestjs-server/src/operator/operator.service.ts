import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OperatorCreateDTO, OperatorUpdateDTO } from './dto';
import { Operator, OperatorDocument } from './operator.schema';
import { Model } from 'mongoose';

@Injectable()
export class OperatorService {
  constructor(
    @InjectModel(Operator.name) private operatorModel: Model<OperatorDocument>,
  ) {}

  async create(data: OperatorCreateDTO): Promise<Operator> {
    return await this.operatorModel.create(data);
  }
  async update(id: string, data: OperatorUpdateDTO): Promise<Operator> {
    return await this.operatorModel.findByIdAndUpdate(id, { ...data });
  }
}

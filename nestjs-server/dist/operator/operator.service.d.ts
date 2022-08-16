import { OperatorCreateDTO, OperatorUpdateDTO } from './dto';
import { Operator, OperatorDocument } from './operator.schema';
import { Model } from 'mongoose';
export declare class OperatorService {
    private operatorModel;
    constructor(operatorModel: Model<OperatorDocument>);
    create(data: OperatorCreateDTO): Promise<Operator>;
    update(id: string, data: OperatorUpdateDTO): Promise<Operator>;
}

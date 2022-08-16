import { OperatorService } from './operator.service';
import { Operator } from './operator.schema';
import { OperatorCreateDTO, OperatorUpdateDTO } from './dto';
export declare class OperatorController {
    private readonly operatorService;
    constructor(operatorService: OperatorService);
    createOperator(body: OperatorCreateDTO): Promise<Operator>;
    updateOperator(body: OperatorUpdateDTO, id: number): Promise<Operator | null>;
}

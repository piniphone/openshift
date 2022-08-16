import { ConnectionService } from './connection.service';
import { CreateConnectionDto } from './dto/create-connection.dto';
import { UpdateConnectionDto } from './dto/update-connection.dto';
export declare class ConnectionController {
    private readonly connectionService;
    constructor(connectionService: ConnectionService);
    create(createConnectionDto: CreateConnectionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConnectionDto: UpdateConnectionDto): string;
    remove(id: string): string;
}

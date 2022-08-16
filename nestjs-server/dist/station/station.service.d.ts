import { StationCreateDTO } from './dto/index';
import { Model } from 'mongoose';
import { StationUpdateDTO } from './dto';
import { Station, StationDocument } from './station.schema';
export declare class StationService {
    private stationModel;
    constructor(stationModel: Model<StationDocument>);
    findOne(id: string): Promise<Station>;
    create(data: StationCreateDTO): Promise<Station>;
    findAll(query: any): Promise<Station[]>;
    update(id: string, data: StationUpdateDTO): Promise<Station>;
}

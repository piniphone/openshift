import { StationService } from './station.service';
import { Station } from './station.schema';
import { StationCreateDTO, StationUpdateDTO } from './dto';
export declare class StationController {
    private readonly stationService;
    constructor(stationService: StationService);
    getStations(query: any): Promise<Station[]>;
    getStation(stationId: any): Promise<Station>;
    updateStation(stationId: string, data: StationUpdateDTO): Promise<Station>;
    createStation(data: StationCreateDTO): Promise<Station>;
}

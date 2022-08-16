import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { StationService } from './station.service';
import { Station } from './station.schema';
import { StationCreateDTO, StationUpdateDTO } from './dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('station')
@UseGuards(JwtAuthGuard)
@Controller('stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  async getStations(@Query() query): Promise<Station[]> {
    return await this.stationService.findAll(query);
  }

  @Get(':id')
  async getStation(@Param('id') stationId): Promise<Station> {
    return await this.stationService.findOne(stationId);
  }

  @Put(':id')
  async updateStation(
    @Param('id') stationId: string,
    @Body() data: StationUpdateDTO,
  ): Promise<Station> {
    return await this.stationService.update(stationId, data);
  }

  @Post()
  async createStation(@Body() data: StationCreateDTO): Promise<Station> {
    return await this.stationService.create(data);
  }
}

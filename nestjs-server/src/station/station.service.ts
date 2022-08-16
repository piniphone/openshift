import { StationCreateDTO } from './dto/index';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StationUpdateDTO } from './dto';
import { Station, StationDocument } from './station.schema';

@Injectable()
export class StationService {
  constructor(
    @InjectModel(Station.name) private stationModel: Model<StationDocument>,
  ) {}

  async findOne(id: string): Promise<Station> {
    return await this.stationModel.findById(id);
  }

  async create(data: StationCreateDTO): Promise<Station> {
    return await this.stationModel.create(data);
  }

  async findAll(query: any): Promise<Station[]> {
    return await this.stationModel.aggregate([
      { $match: {} },
      { $skip: 0 },
      { $limit: Number(query.limit || 1000) },
      {
        $lookup: {
          from: 'operators',
          as: 'operator',
          foreignField: '_id',
          localField: 'operator',
        },
      },
      {
        $unwind: {
          path: '$operator',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          name: 1,
          directions: 1,
          operator: 1,
        },
      },
    ]);
  }

  async update(id: string, data: StationUpdateDTO): Promise<Station> {
    return await this.stationModel.findOneAndUpdate(
      { _id: id },
      { $set: { ...data } },
    );
  }
}

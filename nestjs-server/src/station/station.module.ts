import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { Station, StationSchema } from './station.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { OperatorModule } from 'src/operator/operator.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Station.name, schema: StationSchema }]),
    OperatorModule,
  ],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Operator {
  @Prop()
  visualRef: string;

  @Prop()
  type: string;

  @Prop()
  status: string;

  @Prop()
  realtime: string;

  @Prop()
  voltage: number;

  @Prop()
  amperage: number;

  @Prop()
  kw: number;

  @Prop()
  power_type: string;

  @Prop()
  format: string;

  @Prop()
  authenticationRfid: string;

  @Prop()
  authenticationRemote: string;

  @Prop()
  cost: string;

  @Prop()
  status_updated_at: Date;
}

export type OperatorDocument = Operator & mongoose.Document;
export const OperatorSchema = SchemaFactory.createForClass(Operator);

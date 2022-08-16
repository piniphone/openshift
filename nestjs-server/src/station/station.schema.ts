import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Operator } from 'src/operator/operator.schema';

@Schema()
export class Station {
  _id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  marker: string;

  @Prop()
  url: string;

  @Prop()
  rating: number;

  @Prop()
  count_ratings: number;

  @Prop()
  count_comments: number;

  @Prop()
  count_images: number;

  @Prop()
  type: string;

  @Prop()
  online_status: string;

  @Prop()
  offline_status: string;

  @Prop()
  energy: string;

  @Prop()
  reservation: string;

  @Prop()
  reservation_link: string;

  @Prop()
  realtime: string;

  @Prop()
  favorite: boolean;

  @Prop()
  directions: string;

  @Prop()
  charge_price: string;

  @Prop()
  parking_price: string;

  @Prop()
  instructions: string;

  @Prop()
  open_time: string;

  @Prop()
  limit_time: string;

  @Prop()
  contact: string;

  @Prop()
  contact_phone: string;

  @Prop()
  contact_email: string;

  @Prop()
  editable: string;

  @Prop()
  created_at: string;

  @Prop()
  updated_at: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Operator.name })
  operator: Operator;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Operator' })
  // operator: typeof OperatorSchema;

  // geo: {
  //   type: string,
  //   coordinates: number[],
  // },
  // image: {
  //   s: string,
  //   m: string,
  //   l: string,
  // },
  // address: {
  //   address: string,
  //   street: string,
  //   street_number: string,
  //   postal_code: string,
  //   city: string,
  //   area_lvl1: string,
  //   area_lvl2: string,
  //   country_code: string,
  // },
  // advertisement: {
  //   ad_image_url: string,
  //   ad_link: string,
  // },
  // connectors: [{
  //   visualRef: string,
  //   type: string,
  //   status: string,
  //   realtime: string,
  //   voltage: number,
  //   amperage: number,
  //   kw: number,
  //   power_type: string,
  //   format: string,
  //   authenticationRfid: string,
  //   authenticationRemote: string,
  //   cost: string,
  //   status_updated_at: string,
  // }]
}

export type StationDocument = Station & mongoose.Document;
export const StationSchema = SchemaFactory.createForClass(Station);

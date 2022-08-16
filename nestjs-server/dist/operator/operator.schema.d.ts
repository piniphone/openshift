import * as mongoose from 'mongoose';
export declare class Operator {
    visualRef: string;
    type: string;
    status: string;
    realtime: string;
    voltage: number;
    amperage: number;
    kw: number;
    power_type: string;
    format: string;
    authenticationRfid: string;
    authenticationRemote: string;
    cost: string;
    status_updated_at: Date;
}
export declare type OperatorDocument = Operator & mongoose.Document;
export declare const OperatorSchema: mongoose.Schema<Operator, mongoose.Model<Operator, any, any, any, any>, {}, {}, {}, {}, "type", Operator>;

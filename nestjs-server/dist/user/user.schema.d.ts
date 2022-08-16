import * as mongoose from 'mongoose';
export declare class User {
    _id: mongoose.Types.ObjectId;
    username: string;
    password: string;
    name: string;
}
export declare type UserDocument = User & mongoose.Document;
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async login(username: string, password: string) {
    const user = await this.userModel.findOne({ username });
    if (!user) return null;
    if (await argon2.verify(user.password, password)) return user;
    return null;
  }

  async signup(username: string, password: string, data: Partial<User> = {}) {
    const exists = await this.userModel.countDocuments({ username });
    if (exists) throw new HttpException('USER_EXISTS', HttpStatus.FORBIDDEN);
    const hash = await argon2.hash(password);
    return await this.userModel.create({ ...data, password: hash, username });
  }

  async getUserData(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id }, { name: 1, username: 1 });
  }
}

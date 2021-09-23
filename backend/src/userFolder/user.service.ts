import { Model } from 'mongoose';
import {Injectable} from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from '../../dto/user.dto';
import {InjectModel} from "@nestjs/mongoose";


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

    async create(createUserDto: UserDto) {
        const createdUser = new this.UserModel(createUserDto);
        const response = await createdUser.save();
        return response.id as string;
    }

}

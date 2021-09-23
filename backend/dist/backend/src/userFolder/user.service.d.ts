import { Model } from 'mongoose';
import { User } from './user.model';
import { UserDto } from '../../../dto/user.dto';
export declare class UserService {
    private readonly UserModel;
    constructor(UserModel: Model<User>);
    create(createUserDto: UserDto): Promise<string>;
}

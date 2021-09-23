import { UserService } from './user.service';
import { UserDto } from '../../../dto/user.dto';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    create(createCatDto: UserDto): Promise<void>;
}

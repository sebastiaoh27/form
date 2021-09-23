import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../../dto/user.dto';


@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) {}

    @Post()
    async create(@Body() createCatDto: UserDto) {
        await this.UserService.create(createCatDto);
    }
}

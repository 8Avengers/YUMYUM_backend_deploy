import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(createUserDto: CreateUserDto): Promise<{
        email: any;
        password: any;
        nickname: any;
        name: any;
        gender: any;
        birth: any;
        phone_number: any;
    } & User>;
    me(user: User): Promise<User>;
    view(id: string): Promise<User>;
    followUser(follower: User, followingId: number): Promise<User>;
    unfollowUser(follower: User, followingId: number): Promise<User>;
    getFollowersOfUser(userId: number): Promise<User[]>;
    getFollowingsOfUser(userId: number): Promise<User[]>;
}

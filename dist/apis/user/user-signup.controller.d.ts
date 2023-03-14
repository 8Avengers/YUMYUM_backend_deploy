import { CreateUserDto } from './dto/create-user.dto';
import { UserSignupService } from './user-signup.service';
export declare class UserSignupController {
    private readonly userSignupService;
    constructor(userSignupService: UserSignupService);
    signUp(createUserDto: CreateUserDto): Promise<{
        email: any;
        password: any;
        nickname: any;
        name: any;
        gender: any;
        birth: any;
        phone_number: any;
    } & import("./entities/user.entity").User>;
}

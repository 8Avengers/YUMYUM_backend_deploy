import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne({ email }: {
        email: any;
    }): Promise<User>;
    createUser({ email, hashedPassword, nickname, name, gender, birth, profileImage, phoneNumber, }: {
        email: any;
        hashedPassword: any;
        nickname: any;
        name: any;
        gender: any;
        birth: any;
        profileImage: any;
        phoneNumber: any;
    }): Promise<{
        email: any;
        password: any;
        nickname: any;
        name: any;
        gender: any;
        birth: any;
        phone_number: any;
        profile_image: any;
    } & User>;
    createOauthUser({ email, nickname, name }: {
        email: any;
        nickname: any;
        name: any;
    }): Promise<{
        email: any;
        nickname: any;
        name: any;
    } & User>;
    getUserById(id: any): Promise<User>;
}
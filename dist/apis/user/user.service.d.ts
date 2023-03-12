import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Collection } from '../collection/entities/collection.entity';
import { Follow } from './entities/follow.entity';
export declare class UserService {
    private readonly userRepository;
    private FollowRepository;
    private readonly collectionRepository;
    constructor(userRepository: Repository<User>, FollowRepository: Repository<Follow>, collectionRepository: Repository<Collection>);
    findOne({ email }: {
        email: any;
    }): Promise<User>;
    getUserById(id: any): Promise<User>;
    createUser({ email, hashedPassword, nickname, name, gender, birth, phoneNumber, }: {
        email: any;
        hashedPassword: any;
        nickname: any;
        name: any;
        gender: any;
        birth: any;
        phoneNumber: any;
    }): Promise<{
        email: any;
        password: any;
        nickname: any;
        name: any;
        gender: any;
        birth: any;
        phone_number: any;
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
    createUserFollowRelation(follower: User, followingId: number): Promise<User>;
    deleteUserFollowRelation(follower: User, followingId: number): Promise<User>;
    getFollowers(userId: number): Promise<User[]>;
    getFollowings(userId: number): Promise<User[]>;
}

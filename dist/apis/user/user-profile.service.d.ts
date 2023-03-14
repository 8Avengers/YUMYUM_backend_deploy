import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Collection } from '../collection/entities/collection.entity';
import { Follow } from './entities/follow.entity';
export declare class UserProfileService {
    private readonly userRepository;
    private FollowRepository;
    private readonly collectionRepository;
    constructor(userRepository: Repository<User>, FollowRepository: Repository<Follow>, collectionRepository: Repository<Collection>);
    findByEmail({ email }: {
        email: any;
    }): Promise<User>;
    getUserById(id: any): Promise<User>;
    getUserByNickname(nickname: string): Promise<User>;
    updateUserProfile({ UpdateUserProfileDto, user, file }: {
        UpdateUserProfileDto: any;
        user: any;
        file: any;
    }): Promise<User>;
    deleteUser(user: any): Promise<boolean>;
    createUserFollowRelation(follower: User, followingId: number): Promise<User>;
    deleteUserFollowRelation(follower: User, followingId: number): Promise<User>;
    getFollowers(userId: number): Promise<User[]>;
    getFollowings(userId: number): Promise<User[]>;
}

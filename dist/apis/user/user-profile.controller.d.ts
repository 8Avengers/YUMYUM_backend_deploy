/// <reference types="multer-s3" />
import { UserProfileService } from './user-profile.service';
import { User } from './entities/user.entity';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { UploadService } from '../upload/upload.service';
export declare class UserProfileController {
    private readonly userService;
    private readonly uploadService;
    constructor(userService: UserProfileService, uploadService: UploadService);
    getMyProfile(user: User): Promise<User>;
    updateMyProfile(user: any, file: Express.MulterS3.File, UpdateUserProfileDto: UpdateUserProfileDto): Promise<User>;
    deleteUser(user: any): Promise<Boolean>;
    getUserProfile(userId: number): Promise<User>;
    followUser(follower: User, followingId: number): Promise<User>;
    unfollowUser(follower: User, followingId: number): Promise<User>;
    getFollowersOfUser(userId: number): Promise<User[]>;
    getFollowingsOfUser(userId: number): Promise<User[]>;
}

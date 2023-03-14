"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_profile_service_1 = require("./user-profile.service");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const auth_guards_1 = require("../auth/guards/auth.guards");
const user_entity_1 = require("./entities/user.entity");
const user_decorators_1 = require("./user.decorators");
const update_user_profile_dto_1 = require("./dto/update-user-profile.dto");
const upload_service_1 = require("../upload/upload.service");
const platform_express_1 = require("@nestjs/platform-express");
let UserProfileController = class UserProfileController {
    constructor(userService, uploadService) {
        this.userService = userService;
        this.uploadService = uploadService;
    }
    async getMyProfile(user) {
        const myProfile = await this.userService.getUserById(user.id);
        return myProfile;
    }
    async updateMyProfile(user, file, UpdateUserProfileDto) {
        console.log(file);
        const updatedUserProfile = await this.userService.updateUserProfile({
            user,
            UpdateUserProfileDto,
            file,
        });
        return updatedUserProfile;
    }
    async deleteUser(user) {
        try {
            return await this.userService.deleteUser(user);
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getUserProfile(userId) {
        const user = await this.userService.getUserById(userId);
        return user;
    }
    async followUser(follower, followingId) {
        console.log('Follower follower, followingId', follower.id, followingId);
        const followerId = follower.id;
        try {
            const followingUser = await this.userService.createUserFollowRelation(follower, followingId);
            return followingUser;
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('Invalid user id');
        }
    }
    async unfollowUser(follower, followingId) {
        const unfollowedUser = await this.userService.deleteUserFollowRelation(follower, followingId);
        return unfollowedUser;
    }
    async getFollowersOfUser(userId) {
        return this.userService.getFollowers(userId);
    }
    async getFollowingsOfUser(userId) {
        return this.userService.getFollowings(userId);
    }
};
__decorate([
    (0, common_1.Get)('/me'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "getMyProfile", null);
__decorate([
    (0, common_1.Put)('/me'),
    (0, user_decorators_1.UpdateUserProfile)(),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, update_user_profile_dto_1.UpdateUserProfileDto]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "updateMyProfile", null);
__decorate([
    (0, user_decorators_1.DeleteUser)(),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, common_1.Delete)('/me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, common_1.Post)('/:userId/follow'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "followUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, common_1.Delete)('/:userId/follow'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "unfollowUser", null);
__decorate([
    (0, common_1.Get)('/:userId/followers'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "getFollowersOfUser", null);
__decorate([
    (0, common_1.Get)('/:userId/followings'),
    __param(0, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "getFollowingsOfUser", null);
UserProfileController = __decorate([
    (0, swagger_1.ApiTags)('유저프로필/팔로우/팔로잉'),
    (0, common_1.Controller)('/profile'),
    __metadata("design:paramtypes", [user_profile_service_1.UserProfileService,
        upload_service_1.UploadService])
], UserProfileController);
exports.UserProfileController = UserProfileController;
//# sourceMappingURL=user-profile.controller.js.map
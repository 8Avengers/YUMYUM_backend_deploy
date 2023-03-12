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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
const create_user_dto_1 = require("./dto/create-user.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const auth_guards_1 = require("../auth/guards/auth.guards");
const user_entity_1 = require("./entities/user.entity");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(createUserDto) {
        const { email, password, nickname, name, gender, birth, phoneNumber } = createUserDto;
        console.log(createUserDto);
        const hashedPassword = await bcrypt.hash(password, 12);
        return this.userService.createUser({
            email,
            hashedPassword,
            nickname,
            name,
            gender,
            birth,
            phoneNumber,
        });
    }
    async me(user) {
        return user;
    }
    async view(id) {
        const user = await this.userService.getUserById(id);
        return user;
    }
    async followUser(follower, followingId) {
        console.log('컨트롤러의 follower, follwingId', follower.id, followingId);
        const followerId = follower.id;
        const followingUser = await this.userService.createUserFollowRelation(follower, followingId);
        return followingUser;
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
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Get)('/me'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "me", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "view", null);
__decorate([
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, common_1.Post)('/:userid/follow'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "followUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, common_1.Delete)('/:userid/follow'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "unfollowUser", null);
__decorate([
    (0, common_1.Get)('/:userid/followers'),
    __param(0, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFollowersOfUser", null);
__decorate([
    (0, common_1.Get)('/:userid/followings'),
    __param(0, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFollowingsOfUser", null);
UserController = __decorate([
    (0, common_1.Controller)('/'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
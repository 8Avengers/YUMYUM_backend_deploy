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
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
const create_user_dto_1 = require("./dto/create-user.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const auth_guards_1 = require("../auth/guards/auth.guards");
const user_entity_1 = require("./entities/user.entity");
const user_decorators_1 = require("./user.decorators");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUpEmail(createUserDto) {
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
};
__decorate([
    (0, user_decorators_1.signUpEmail)(),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUpEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '나의프로필페이지' }),
    (0, common_1.Get)('/me'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "me", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '사람들의 프로필페이지' }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "view", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('/'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
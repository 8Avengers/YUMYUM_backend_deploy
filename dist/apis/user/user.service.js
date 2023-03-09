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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_2 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findOne({ email }) {
        return await this.userRepository.findOne({
            where: { email },
        });
    }
    async createUser({ email, hashedPassword, nickname, name, gender, birth, profileImage, phoneNumber, }) {
        try {
            const user = await this.userRepository.findOne({
                where: { email },
            });
            if (user)
                throw new common_2.ConflictException('이미 등록된 이메일입니다.');
            const nicknameExists = await this.userRepository.findOne({
                where: { nickname },
            });
            if (nicknameExists)
                throw new common_2.ConflictException('이미 사용중인 nickname입니다.');
            return await this.userRepository.save({
                email,
                password: hashedPassword,
                nickname,
                name,
                gender,
                birth,
                phone_number: phoneNumber,
                profile_image: profileImage,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async createOauthUser({ email, nickname, name }) {
        try {
            const user = await this.userRepository.findOne({
                where: { email },
            });
            if (user)
                throw new common_2.ConflictException('이미 등록된 이메일입니다.');
            const nicknameExists = await this.userRepository.findOne({
                where: { nickname },
            });
            if (nicknameExists)
                throw new common_2.ConflictException('이미 사용중인 nickname입니다.');
            return await this.userRepository.save({
                email,
                nickname,
                name,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async getUserById(id) {
        try {
            const user = await this.userRepository.findOne({
                where: { id },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            delete user.password;
            return user;
        }
        catch (error) {
            throw error;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
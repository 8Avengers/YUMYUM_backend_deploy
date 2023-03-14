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
exports.MapService = void 0;
const follow_entity_1 = require("../user/entities/follow.entity");
const post_entity_1 = require("../post/entities/post.entity");
const Repository_1 = require("typeorm/repository/Repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let MapService = class MapService {
    constructor(postRepository, followRepository) {
        this.postRepository = postRepository;
        this.followRepository = followRepository;
    }
    async getFollowerPosting(userId) {
        let followerPostingResult = [];
        let followerList = await this.followRepository.findBy({
            follower: { id: userId },
        });
        for (let follower of followerList) {
            const followerPost = await this.postRepository.find({
                relations: ['restaurant'],
                where: { user: { id: follower.id } },
            });
            console.log(follower.id, '여기 시작1', followerPost, '여기 끝');
            if (followerPost.length < 1) {
                continue;
            }
            followerPostingResult.push(...followerPost);
        }
        return followerPostingResult;
    }
};
MapService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(follow_entity_1.Follow)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository])
], MapService);
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map
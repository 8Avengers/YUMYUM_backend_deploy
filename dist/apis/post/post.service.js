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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
const post_like_service_1 = require("./post-like.service");
const post_hashtag_service_1 = require("./post-hashtag.service");
const my_list_service_1 = require("../collection/my-list.service");
let PostService = class PostService {
    constructor(postRepository, likeService, postHashtagService, myListService) {
        this.postRepository = postRepository;
        this.likeService = likeService;
        this.postHashtagService = postHashtagService;
        this.myListService = myListService;
    }
    async getPosts() {
        try {
            const posts = await this.postRepository.find({
                where: { deleted_at: null, visibility: 'public' },
                select: ['id', 'content', 'rating', 'img_url', 'updated_at'],
                relations: ['user', 'restaurant', 'hashtags'],
            });
            if (!posts || posts.length === 0) {
                throw new common_1.NotFoundException('포스트가 없습니다.');
            }
            const postIds = posts.map((post) => post.id);
            const postLikes = await this.likeService.getLikesForAllPosts(postIds);
            return posts.map((post) => {
                var _a;
                const hashtags = post.hashtags.map((hashtag) => hashtag.name);
                const likes = ((_a = postLikes.find((like) => like.postId === post.id)) === null || _a === void 0 ? void 0 : _a.totalLikes) || 0;
                return Object.assign(Object.assign({}, post), { hashtags, totalLikes: likes });
            });
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                console.error(err);
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
    async getPostById(id) {
        try {
            const post = await this.postRepository.find({
                where: { id, deleted_at: null, visibility: 'public' },
                select: ['content', 'rating', 'img_url', 'updated_at'],
                relations: ['restaurant', 'user', 'hashtags'],
            });
            if (!post) {
                throw new common_1.NotFoundException(`존재하지 않는 포스트입니다.`);
            }
            const totalLikes = await this.likeService.getLikesForPost(id);
            const hashtags = post[0].hashtags.map(({ name }) => ({ name }));
            return Object.assign(Object.assign({}, post[0]), { totalLikes, hashtags });
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            else {
                console.error(err);
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
    async createPost(userId, restaurantId, myListId, content, rating, img, visibility, hashtagNames) {
        try {
            const post = await this.postRepository.create({
                user: { id: userId },
                restaurant: { id: restaurantId },
                content,
                rating,
                img_url: img,
                visibility,
            });
            const hashtags = await this.postHashtagService.createOrUpdateHashtags(hashtagNames);
            post.hashtags = hashtags;
            await this.postRepository.save(post);
            const postId = post.id;
            await this.myListService.myListPlusPosting(postId, myListId);
        }
        catch (err) {
            console.error(err);
            throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
        }
    }
    async updatePost(id, restaurantId, myListId, content, rating, img, visibility, hashtagNames) {
        try {
            const post = await this.postRepository.findOne({ where: { id } });
            if (!post) {
                throw new common_1.NotFoundException(`존재하지 않는 포스트입니다.`);
            }
            await this.postRepository.update(id, {
                restaurant: { id: restaurantId },
                content,
                rating,
                img_url: img,
                visibility,
            });
            const hashtags = await this.postHashtagService.createOrUpdateHashtags(hashtagNames);
            post.hashtags = [...hashtags];
            await this.postRepository.save(post);
            const postId = post.id;
            await this.myListService.myListPlusPosting(postId, myListId);
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            else {
                console.error(err);
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
    async deletePost(id) {
        try {
            const result = await this.postRepository.softDelete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException('존재하지 않는 포스트입니다.');
            }
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            else {
                console.error(err);
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        post_like_service_1.PostLikeService,
        post_hashtag_service_1.PostHashtagService,
        my_list_service_1.MyListService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map
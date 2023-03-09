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
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async getPosts() {
        try {
            const posts = await this.postRepository
                .createQueryBuilder('post')
                .leftJoinAndSelect('post.restaurant', 'restaurant')
                .leftJoinAndSelect('post.user', 'user')
                .where('post.deletedAt IS NULL')
                .select([
                'post.content',
                'post.rating',
                'post.img_url',
                'post.updated_at',
                'user.nickname',
                'restaurant.name',
            ])
                .getMany();
            if (!posts || posts.length === 0) {
                throw new common_1.NotFoundException('No posts found.');
            }
            return posts;
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
    async getPostById(id) {
        try {
            const post = await this.postRepository
                .createQueryBuilder('post')
                .leftJoinAndSelect('post.restaurant', 'restaurant')
                .leftJoinAndSelect('post.user', 'user')
                .where('post.id = :id', { id })
                .andWhere('post.deletedAt IS NULL')
                .select([
                'post.content',
                'post.rating',
                'post.img_url',
                'post.updated_at',
                'user.nickname',
                'restaurant.name',
            ])
                .getOne();
            if (!post) {
                throw new common_1.NotFoundException(`Post with id ${id} not found.`);
            }
            return post;
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
    createPost(restaurantId, content, rating, img) {
        try {
            return this.postRepository.insert({
                restaurant: { id: restaurantId },
                content,
                rating,
                img_url: img,
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
        }
    }
    async updatePost(id, content, rating, img) {
        try {
            const result = await this.postRepository.update(id, {
                content,
                rating,
                img_url: img,
            });
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Post with id ${id} not found.`);
            }
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            else {
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
    async deletePost(id) {
        try {
            const result = await this.postRepository.softDelete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Post with id ${id} not found.`);
            }
        }
        catch (err) {
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            else {
                throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
            }
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map
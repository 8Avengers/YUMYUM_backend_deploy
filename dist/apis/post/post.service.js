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
const comment_entity_1 = require("../comment/entities/comment.entity");
const restaurant_service_1 = require("../restaurant/restaurant.service");
let PostService = class PostService {
    constructor(postRepository, commentRepository, likeService, postHashtagService, myListService, restaurantService) {
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.likeService = likeService;
        this.postHashtagService = postHashtagService;
        this.myListService = myListService;
        this.restaurantService = restaurantService;
    }
    async getPosts(userId) {
        try {
            const posts = await this.postRepository.find({
                where: { deleted_at: null, visibility: 'public' },
                select: ['id', 'content', 'rating', 'img_url', 'updated_at'],
                relations: ['user', 'restaurant', 'hashtags', 'comments'],
            });
            if (!posts || posts.length === 0) {
                throw new common_1.NotFoundException('포스트가 없습니다.');
            }
            const postIds = posts.map((post) => post.id);
            const postLikes = await this.likeService.getLikesForAllPosts(postIds);
            const likedStatuses = await this.likeService.getLikedStatusforAllPosts(postIds, userId);
            return posts.map((post) => {
                var _a, _b;
                const { id, nickname, profile_image } = post.user;
                const hashtags = post.hashtags.map((hashtag) => hashtag.name);
                const likes = ((_a = postLikes.find((like) => like.postId === post.id)) === null || _a === void 0 ? void 0 : _a.totalLikes) || 0;
                const isLiked = ((_b = likedStatuses.find((status) => status.postId === post.id)) === null || _b === void 0 ? void 0 : _b.isLiked) ||
                    'False';
                const totalComments = post.comments ? post.comments.length : 0;
                return Object.assign(Object.assign({}, post), { user: { id, nickname, profile_image }, hashtags, totalLikes: likes, isLiked,
                    totalComments });
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
    async getPostById(postId, userId) {
        try {
            const post = await this.postRepository.find({
                where: { id: postId, deleted_at: null, visibility: 'public' },
                select: ['content', 'rating', 'img_url', 'updated_at'],
                relations: ['restaurant', 'user', 'hashtags'],
            });
            if (!post) {
                throw new common_1.NotFoundException(`존재하지 않는 포스트입니다.`);
            }
            const totalLikes = await this.likeService.getLikesForPost(postId);
            const hashtags = post[0].hashtags.map(({ name }) => ({ name }));
            const { isLiked } = await this.likeService.getLikedStatusforOnePost(postId, userId);
            const totalComments = await this.commentRepository.count({
                where: { deleted_at: null, post: { id: postId } },
            });
            const { id, nickname, profile_image } = post[0].user;
            return Object.assign(Object.assign({}, post[0]), { user: { id, nickname, profile_image }, totalLikes,
                hashtags,
                isLiked,
                totalComments });
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
    async createPost(userId, address_name, category_group_code, category_group_name, category_name, kakao_place_id, phone, place_name, road_address_name, x, y, myListIds, content, rating, img, visibility, hashtagNames) {
        try {
            const createdRestaurant = await this.restaurantService.createRestaurant(address_name, category_group_code, category_group_name, category_name, kakao_place_id, phone, place_name, road_address_name, x, y);
            const restaurantId = createdRestaurant;
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
            await this.myListService.myListPlusPosting(postId, myListIds);
            return { postId: postId };
        }
        catch (err) {
            console.error(err);
            throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
        }
    }
    async updatePost(id, address_name, category_group_code, category_group_name, category_name, kakao_place_id, phone, place_name, road_address_name, x, y, myListId, content, rating, image, visibility, hashtagNames) {
        try {
            const post = await this.postRepository.findOne({ where: { id }, relations: ['hashtags'] });
            if (!post) {
                throw new common_1.NotFoundException(`존재하지 않는 포스트입니다.`);
            }
            const createdRestaurant = await this.restaurantService.createRestaurant(address_name, category_group_code, category_group_name, category_name, kakao_place_id, phone, place_name, road_address_name, x, y);
            const restaurantId = createdRestaurant;
            const updateData = {};
            if (restaurantId) {
                updateData.restaurant = { id: restaurantId };
            }
            if (content) {
                updateData.content = content;
            }
            if (rating) {
                updateData.rating = rating;
            }
            if (image) {
                updateData.img_url = image;
            }
            if (visibility) {
                updateData.visibility = visibility;
            }
            if (hashtagNames) {
                const hashtags = await this.postHashtagService.createOrUpdateHashtags(hashtagNames);
                updateData.hashtags = hashtags;
            }
            await this.postRepository.save(Object.assign(Object.assign({}, post), updateData), { reload: true });
            if (myListId) {
                await this.myListService.myListPlusPosting(id, myListId);
            }
            return { postId: id };
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
    async getMyPosts(userId) {
        try {
            const posts = await this.postRepository.find({
                where: { deleted_at: null, visibility: 'public', user: { id: userId } },
                select: ['id', 'content', 'rating', 'img_url', 'updated_at'],
                relations: ['user', 'restaurant', 'hashtags'],
            });
            if (!posts || posts.length === 0) {
                throw new common_1.NotFoundException('No posts found.');
            }
            const postIds = posts.map((post) => post.id);
            const postLikes = await this.likeService.getLikesForAllPosts(postIds);
            const likedStatuses = await this.likeService.getLikedStatusforAllPosts(postIds, userId);
            return posts.map((post) => {
                var _a, _b;
                const hashtags = post.hashtags.map((hashtag) => hashtag.name);
                const likes = ((_a = postLikes.find((like) => like.postId === post.id)) === null || _a === void 0 ? void 0 : _a.totalLikes) || 0;
                const isLiked = ((_b = likedStatuses.find((status) => status.postId === post.id)) === null || _b === void 0 ? void 0 : _b.isLiked) ||
                    'False';
                return Object.assign(Object.assign({}, post), { hashtags, totalLikes: likes, isLiked });
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
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        post_like_service_1.PostLikeService,
        post_hashtag_service_1.PostHashtagService,
        my_list_service_1.MyListService,
        restaurant_service_1.RestaurantService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map
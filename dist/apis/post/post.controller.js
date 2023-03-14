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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const create_restaurant_dto_1 = require("../restaurant/dto/create-restaurant.dto");
const auth_guards_1 = require("../auth/guards/auth.guards");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getPostById(postId, currentUser) {
        return await this.postService.getPostById(postId, currentUser.id);
    }
    async getPosts(currentUser) {
        const posts = await this.postService.getPosts(currentUser.id);
        return posts;
    }
    createPost(data, restaurantData, currentUser) {
        return this.postService.createPost(currentUser.id, restaurantData.address_name, restaurantData.category_group_code, restaurantData.category_group_name, restaurantData.category_name, restaurantData.kakao_place_id, restaurantData.phone, restaurantData.place_name, restaurantData.road_address_name, restaurantData.x, restaurantData.y, data.myListId, data.content, data.rating, data.image, data.visibility, data.hashtagNames);
    }
    async updateArticle(postId, data, restaurantData) {
        return this.postService.updatePost(postId, restaurantData.address_name, restaurantData.category_group_code, restaurantData.category_group_name, restaurantData.category_name, restaurantData.kakao_place_id, restaurantData.phone, restaurantData.place_name, restaurantData.road_address_name, restaurantData.x, restaurantData.y, data.myListId, data.content, data.rating, data.image, data.visibility, data.hashtagNames);
    }
    async deletePost(postId) {
        return this.postService.deletePost(postId);
    }
};
__decorate([
    (0, common_1.Get)('/:postId'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto,
        create_restaurant_dto_1.CreateRestaurantDto, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Patch)('/:postId'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, create_restaurant_dto_1.CreateRestaurantDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)('/:postId'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
PostController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map
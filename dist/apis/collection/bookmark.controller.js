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
exports.BookmarkController = void 0;
const common_1 = require("@nestjs/common");
const bookmark_service_1 = require("./bookmark.service");
const create_collection_dto_1 = require("./dto/create-collection.dto");
let BookmarkController = class BookmarkController {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    async getBookmarks() {
        const bookmarks = await this.bookmarkService.getBookmarks();
        return await bookmarks;
    }
    async getCollections(collectionId) {
        const collections = await this.bookmarkService.getCollections(collectionId);
        return await collections;
    }
    createCollection(data) {
        return this.bookmarkService.createCollection(data);
    }
    async updateCollection(collectionId, name) {
        return await this.bookmarkService.updateCollection(collectionId, name);
    }
    async deleteCollection(collectionId) {
        return await this.bookmarkService.deleteCollection(collectionId);
    }
    async collectionPlusPosting(collectionId, postId) {
        return await this.bookmarkService.collectionPlusPosting(collectionId, postId);
    }
    async collectionPlusRestaurant(collectionId, restaurantId) {
        return await this.bookmarkService.collectionPlusRestaurant(collectionId, restaurantId);
    }
    async collectionMinusPosting(collectionId, postId) {
        return await this.bookmarkService.collectionMinusPosting(collectionId, postId);
    }
    async collectionMinusRestaurant(collectionId, restaurantId) {
        return await this.bookmarkService.collectionMinusRestaurant(collectionId, restaurantId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "getBookmarks", null);
__decorate([
    (0, common_1.Get)('/:collectionId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "getCollections", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_collection_dto_1.CreateCollectionDto]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "createCollection", null);
__decorate([
    (0, common_1.Put)('/:collectionId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "updateCollection", null);
__decorate([
    (0, common_1.Delete)('/:collectionId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "deleteCollection", null);
__decorate([
    (0, common_1.Post)('/:collectionId/:postId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __param(1, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "collectionPlusPosting", null);
__decorate([
    (0, common_1.Post)('/:collectionId/:restaurantId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __param(1, (0, common_1.Param)('restaurantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "collectionPlusRestaurant", null);
__decorate([
    (0, common_1.Delete)('/:collectionId/:postId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __param(1, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "collectionMinusPosting", null);
__decorate([
    (0, common_1.Delete)('/:collectionId/:restaurantId'),
    __param(0, (0, common_1.Param)('collectionId')),
    __param(1, (0, common_1.Param)('restaurantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BookmarkController.prototype, "collectionMinusRestaurant", null);
BookmarkController = __decorate([
    (0, common_1.Controller)('bookmarks'),
    __metadata("design:paramtypes", [bookmark_service_1.BookmarkService])
], BookmarkController);
exports.BookmarkController = BookmarkController;
//# sourceMappingURL=bookmark.controller.js.map
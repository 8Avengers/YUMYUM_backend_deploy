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
exports.BookmarkService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("../post/entities/post.entity");
const collection_item_entity_1 = require("./entities/collection-item.entity");
const collection_entity_1 = require("./entities/collection.entity");
let BookmarkService = class BookmarkService {
    constructor(bookmarkRepository, collectionRepository, postRepository) {
        this.bookmarkRepository = bookmarkRepository;
        this.collectionRepository = collectionRepository;
        this.postRepository = postRepository;
    }
    async getBookmarks() {
        return await this.bookmarkRepository.find({
            where: { deletedAt: null },
        });
    }
    async getCollections(id) {
        return await this.bookmarkRepository.find({
            where: { id, deletedAt: null },
        });
    }
    createCollection(data) {
        return this.bookmarkRepository.insert({
            type: data.type,
            name: data.name,
            description: data.description,
            visibility: data.visibility,
        });
    }
    async updateCollection(id, name) {
    }
    async deleteCollection(id) {
        return await this.bookmarkRepository.softDelete(id);
    }
    async collectionPlusPosting(collectionId, postId) {
        const newBookmark = await this.postRepository.findOneBy({ id: postId });
        const collection = await this.bookmarkRepository.findOneBy({
            id: collectionId,
        });
        console.log('나는 콘솔', newBookmark, collection);
        await this.bookmarkRepository.save(collection);
    }
    async collectionPlusRestaurant(id, restaurantId) { }
    collectionMinusPosting(id, postId) { }
    collectionMinusRestaurant(id, restaurantId) { }
};
BookmarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(collection_entity_1.Collection)),
    __param(1, (0, typeorm_1.InjectRepository)(collection_item_entity_1.CollectionItem)),
    __param(2, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BookmarkService);
exports.BookmarkService = BookmarkService;
//# sourceMappingURL=bookmark.service.js.map
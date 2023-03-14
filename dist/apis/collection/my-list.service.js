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
exports.MyListService = void 0;
const collection_entity_1 = require("./entities/collection.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const collection_item_entity_1 = require("./entities/collection-item.entity");
const post_entity_1 = require("../post/entities/post.entity");
let MyListService = class MyListService {
    constructor(collectionRepository, collectionItemRepository, postRepository) {
        this.collectionRepository = collectionRepository;
        this.collectionItemRepository = collectionItemRepository;
        this.postRepository = postRepository;
    }
    async getMyListsMe(userId) {
        try {
            const myLists = await this.collectionRepository.find({
                relations: {
                    collectionItems: {
                        post: true,
                        restaurant: true,
                    },
                },
                where: { user_id: userId, deletedAt: null, type: 'myList' },
                select: { name: true, description: true, image: true },
            });
            return myLists.map((collection) => (Object.assign(Object.assign({}, collection), { collectionItems: collection.collectionItems.slice(0, 3) })));
        }
        catch (err) {
            console.error(err);
            throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
        }
    }
    async getMyListsAll(userId) {
        try {
            const myLists = await this.collectionRepository.find({
                relations: {
                    collectionItems: {
                        post: true,
                        restaurant: true,
                    },
                },
                where: { user_id: userId, deletedAt: null, type: 'myList' },
                select: { name: true, description: true, image: true },
            });
            return myLists.map((collection) => (Object.assign(Object.assign({}, collection), { collectionItems: collection.collectionItems.slice(0, 3) })));
        }
        catch (err) {
            console.error(err);
            throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
        }
    }
    async createMyList(userId, name, type) {
        try {
            const myLists = await this.collectionRepository.insert({
                user_id: userId,
                name,
                type: 'myList',
            });
            return myLists;
        }
        catch (err) {
            console.error(err);
            throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
        }
    }
    async updateMyList(userId, collectionId, name, image, description, visibility) {
        try {
            const myList = await this.collectionRepository.find({
                relations: {
                    user: true,
                },
            });
            if (!myList) {
                throw new common_1.NotFoundException('마이리스트가 없습니다.');
            }
            await this.collectionRepository.update({ id: collectionId }, {
                name,
                image,
                description,
                visibility,
            });
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
    async deleteMyList(userId, id) {
        try {
            const result = await this.collectionRepository.softDelete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException('마이리스트가 없습니다.');
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
    async myListPlusPosting(postId, collectionId) {
        try {
            for (let i = 0; i < collectionId.length; i++) {
                const item = collectionId[i];
                const existingItem = await this.collectionItemRepository.findOne({
                    where: {
                        post: { id: postId },
                        collection: { id: item },
                    },
                });
                if (existingItem) {
                    continue;
                }
                const collectionItem = this.collectionItemRepository.create({
                    post: { id: postId },
                    collection: { id: item },
                });
                await this.collectionItemRepository.save(collectionItem);
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
    async myListMinusPosting(postId, collectionId) {
        try {
            if (collectionId) {
                await this.collectionItemRepository.delete({
                    collection: { id: collectionId },
                    post: { id: postId },
                });
            }
            else {
                throw new common_1.NotFoundException('해당 컬렉션은 없습니다.');
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
MyListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(collection_entity_1.Collection)),
    __param(1, (0, typeorm_1.InjectRepository)(collection_item_entity_1.CollectionItem)),
    __param(2, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository,
        Repository_1.Repository])
], MyListService);
exports.MyListService = MyListService;
//# sourceMappingURL=my-list.service.js.map
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
let MyListService = class MyListService {
    constructor(collectionRepository, collectionItemRepository) {
        this.collectionRepository = collectionRepository;
        this.collectionItemRepository = collectionItemRepository;
    }
    async getMyList(userId) {
        try {
            const myLists = await this.collectionRepository.find({
                where: { user_id: userId, deletedAt: null, type: 'myList' },
                select: { name: true, description: true, image: true },
            });
            return myLists;
        }
        catch (err) {
            console.error(err);
            throw new common_1.InternalServerErrorException('Something went wrong while processing your request. Please try again later.');
        }
    }
    async createMyList(userId, name, type) {
        try {
            return this.collectionRepository.insert({
                user_id: userId,
                name,
                type: 'myList',
            });
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
    async deleteMyList(id) {
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
            await this.collectionItemRepository.insert({
                post: { id: postId },
                collection: { id: collectionId },
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
};
MyListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(collection_entity_1.Collection)),
    __param(1, (0, typeorm_1.InjectRepository)(collection_item_entity_1.CollectionItem)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository])
], MyListService);
exports.MyListService = MyListService;
//# sourceMappingURL=my-list.service.js.map
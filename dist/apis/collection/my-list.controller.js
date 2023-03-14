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
exports.MyListController = void 0;
const minus_bookmark_posting_dto_1 = require("./dto/minus-bookmark-posting.dto");
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const swagger_1 = require("@nestjs/swagger");
const create_my_list_dto_1 = require("./dto/create-my-list.dto");
const update_my_list_dto_1 = require("./dto/update-my-list.dto");
const my_list_service_1 = require("./my-list.service");
const add_my_list_posting_dto_1 = require("./dto/add-my-list-posting.dto");
const auth_guards_1 = require("../auth/guards/auth.guards");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
let MyListController = class MyListController {
    constructor(myListService) {
        this.myListService = myListService;
    }
    async getMyListsMe(currentUser) {
        const myLists = await this.myListService.getMyListsMe(currentUser.id);
        return await myLists;
    }
    async getMyListsAll(userId) {
        const myLists = await this.myListService.getMyListsAll(userId);
        return await myLists;
    }
    async createMyList(data, currentUser) {
        return await this.myListService.createMyList(currentUser.id, data.name, data.type);
    }
    async updateMyList(collectionId, data, currentUser) {
        return this.myListService.updateMyList(currentUser, collectionId, data.name, data.image, data.description, data.visibility);
    }
    async deleteMyList(collectionId, currentUser) {
        return this.myListService.deleteMyList(currentUser, collectionId);
    }
    async myListPlusPosting(postId, data) {
        return this.myListService.myListPlusPosting(postId, data.collectionId);
    }
    async myListMinusPosting(postId, data, currentUser) {
        return await this.myListService.myListMinusPosting(postId, data.collectionId);
    }
};
__decorate([
    (0, common_1.Get)('/collections'),
    (0, decorators_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, swagger_1.ApiOperation)({ summary: 'MyList 전체조회(내꺼)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'MyList 전체조회(내꺼) 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'MyList 전체조회(내꺼) 실패' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MyListController.prototype, "getMyListsMe", null);
__decorate([
    (0, common_1.Get)('/collections/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'MyList 전체조회' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'MyList 전체조회 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'MyList 전체조회 실패' }),
    __param(0, (0, decorators_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MyListController.prototype, "getMyListsAll", null);
__decorate([
    (0, common_1.Post)('/collections'),
    (0, decorators_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, swagger_1.ApiOperation)({ summary: 'MyList 생성' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'MyList 생성 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'MyList 생성 실패' }),
    __param(0, (0, decorators_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_my_list_dto_1.CreateMyListDto, Object]),
    __metadata("design:returntype", Promise)
], MyListController.prototype, "createMyList", null);
__decorate([
    (0, common_1.Put)('/collections/:collectionId'),
    (0, decorators_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, swagger_1.ApiOperation)({ summary: 'MyList 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'MyList 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'MyList 수정 실패' }),
    __param(0, (0, decorators_1.Param)('collectionId')),
    __param(1, (0, decorators_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_my_list_dto_1.UpdateMyListDto, Object]),
    __metadata("design:returntype", Promise)
], MyListController.prototype, "updateMyList", null);
__decorate([
    (0, common_1.Delete)('/collections/:collectionId'),
    (0, decorators_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, swagger_1.ApiOperation)({ summary: 'MyList 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'MyList 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'MyList 삭제 실패' }),
    __param(0, (0, decorators_1.Param)('collectionId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MyListController.prototype, "deleteMyList", null);
__decorate([
    (0, common_1.Post)('/collections/plus/:postId'),
    (0, decorators_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, swagger_1.ApiOperation)({ summary: 'MyList 포스팅 추가' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'MyList 포스팅 추가 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'MyList 포스팅 추가 실패' }),
    __param(0, (0, decorators_1.Param)('postId')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_my_list_posting_dto_1.addCollectionPostingDto]),
    __metadata("design:returntype", Promise)
], MyListController.prototype, "myListPlusPosting", null);
__decorate([
    (0, common_1.Delete)('/collections/minus/:postId'),
    (0, decorators_1.UseGuards)(auth_guards_1.AuthAccessGuard),
    (0, swagger_1.ApiOperation)({ summary: 'MyList 포스팅 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'MyList 포스팅 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'MyList 포스팅 삭제 실패' }),
    __param(0, (0, decorators_1.Param)('postId')),
    __param(1, (0, decorators_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, minus_bookmark_posting_dto_1.minusCollectionPostingDto, Object]),
    __metadata("design:returntype", Promise)
], MyListController.prototype, "myListMinusPosting", null);
MyListController = __decorate([
    (0, common_1.Controller)('my-list'),
    __metadata("design:paramtypes", [my_list_service_1.MyListService])
], MyListController);
exports.MyListController = MyListController;
//# sourceMappingURL=my-list.controller.js.map
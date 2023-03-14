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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const map_service_1 = require("./map.service");
let MapController = class MapController {
    constructor(mapService) {
        this.mapService = mapService;
    }
    async getUserSearch() {
        const userId = 5;
        return await this.mapService.getFollowerPosting(userId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '맵 탐색 페이지' }),
    (0, common_1.Get)('/posting'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapController.prototype, "getUserSearch", null);
MapController = __decorate([
    (0, swagger_1.ApiTags)('Map'),
    (0, common_1.Controller)('map'),
    __metadata("design:paramtypes", [map_service_1.MapService])
], MapController);
exports.MapController = MapController;
//# sourceMappingURL=map.controller.js.map
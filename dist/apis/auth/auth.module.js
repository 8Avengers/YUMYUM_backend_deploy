"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const user_signup_service_1 = require("../user/user-signup.service");
const user_module_1 = require("../user/user.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_access_strategy_1 = require("./jwt-access.strategy");
const jwt_refresh_strategy_1 = require("./jwt-refresh.strategy");
const jwt_social_google_strategy_1 = require("./jwt-social-google.strategy");
const jwt_social_kakao_strategy_1 = require("./jwt-social-kakao.strategy");
const jwt_social_naver_strategy_1 = require("./jwt-social-naver.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({}),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            user_module_1.UserModule,
        ],
        providers: [
            jwt_social_google_strategy_1.JwtGoogleStrategy,
            jwt_social_naver_strategy_1.JwtNaverStrategy,
            jwt_social_kakao_strategy_1.JwtKakaoStrategy,
            jwt_refresh_strategy_1.JwtRefreshStrategy,
            jwt_access_strategy_1.JwtAccessStrategy,
            auth_service_1.AuthService,
            user_signup_service_1.UserSignupService,
        ],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
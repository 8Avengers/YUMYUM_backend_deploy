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
exports.JwtKakaoStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
let JwtKakaoStrategy = class JwtKakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, 'kakao') {
    constructor() {
        super({
            clientID: 'eeee492427b93e266e8aee30e1563978',
            clientSecret: 'chGVh4I1tPP8Xfg86FOGcB1ph0WyXXY3',
            callbackURL: 'http://localhost:3000/login/kakao',
            scope: ['account_email', 'profile_nickname'],
        });
    }
    validate(accessToken, refreshToken, profile) {
        console.log('accessToken카카오찍어보자::::::::', accessToken);
        console.log('refreshToken카카오찍어보자::::::::', refreshToken);
        console.log('카카오 프로필찍어', profile);
        return {
            email: profile._json.kakao_account.email,
            password: 'kakaoOauth!',
            name: profile.displayName,
            age: 0,
        };
    }
};
JwtKakaoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtKakaoStrategy);
exports.JwtKakaoStrategy = JwtKakaoStrategy;
//# sourceMappingURL=jwt-social-kakao.strategy.js.map
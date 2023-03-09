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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[가-힣]{2,8}$/, {
        message: '실명은 한글로 입력해주세요',
    }),
    (0, class_validator_1.IsString)({ message: '이름은 문자열 형식이여야 합니다.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'email을 입력해주세요.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8, { message: '비밀번호는 최소 8글자입니다.' }),
    (0, class_validator_1.MaxLength)(20, { message: '비밀번호는 최대 20글자입니다.' }),
    (0, class_validator_1.IsString)({ message: '비밀번호는 문자열 형식이여야 합니다' }),
    (0, class_validator_1.IsNotEmpty)({ message: '비밀번호를 입력해주세요.' }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}$/, {
        message: '비밀번호는 대문자, 소문자 및 특수 문자를 포함하여 8자 이상 20자이하여야 합니다.',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8, { message: '확인 비밀번호는 최소 8글자입니다.' }),
    (0, class_validator_1.MaxLength)(20, { message: '확인 비밀번호는 최대 20글자입니다.' }),
    (0, class_validator_1.IsString)({ message: '확인 비밀번호는 문자열 형식이여야 합니다' }),
    (0, class_validator_1.IsNotEmpty)({ message: '확인 비밀번호를 입력해주세요.' }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, {
        message: '확인 비밀번호는 대문자, 소문자 및 특수 문자를 포함하여 8자 이상 20자이하여야 합니다.',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '닉네임을 입력헤주세요' }),
    (0, class_validator_1.IsString)({ message: '닉네임은 문자열 형식이여야 합니다.' }),
    (0, class_validator_1.MaxLength)(20, { message: '닉네임은 최대 20글자 입니다.' }),
    (0, class_validator_1.Matches)(/^[가-힣a-z0-9A-Z]{4,20}$/, {
        message: '닉네임은 한글 또는 숫자 또는 영문으로 입력해주세요',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nickname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^010\d{4}\d{4}$/, {
        message: '01012341234형식을 맞춰주세요. 하이픈을 제거해주세요.',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['M', 'F']),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "birth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "profileImage", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map
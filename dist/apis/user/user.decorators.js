"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpEmail = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./dto/user.dto");
const signUpEmail = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: '이메일회원가입' }), (0, swagger_1.ApiResponse)({
        status: 201,
        description: '이메일회원가입 성공',
        type: user_dto_1.UserDto,
    }), (0, swagger_1.ApiResponse)({ status: 400, description: '이메일회원가입 실패' }), (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server Error',
    }));
};
exports.signUpEmail = signUpEmail;
//# sourceMappingURL=user.decorators.js.map
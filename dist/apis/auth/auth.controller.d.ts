import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { OauthUserDto } from '../user/dto/oauth-user.dto';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    loginEmail(loginUserDto: LoginUserDto): Promise<{
        refreshToken: string;
        accessToken: string;
        user: {
            userId: number;
            nickname: string;
            email: string;
            profileImage: string;
        };
    }>;
    signupGoogle(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    loginGoogle(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signupNaver(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    loginNaver(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signupKakao(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    loginKakao(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    restoreAccessToken(currentUser: any): Promise<{
        accessToken: string;
    }>;
}

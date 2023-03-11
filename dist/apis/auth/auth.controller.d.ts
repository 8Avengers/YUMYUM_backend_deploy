import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { OauthUserDto } from '../user/dto/oauth-user.dto';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    loginEmail(loginUserDto: LoginUserDto, req: any): Promise<{
        refreshToken: string;
        accessToken: string;
    }>;
    signupGoogle(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    loginGoogle(user: OauthUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    restoreAccessToken(currentUser: any): Promise<{
        accessToken: string;
    }>;
}

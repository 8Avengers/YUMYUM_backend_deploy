import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly configService;
    private readonly userService;
    constructor(jwtService: JwtService, configService: ConfigService, userService: UserService);
    createAccessToken({ user }: {
        user: any;
    }): string;
    createRefreshToken({ user }: {
        user: any;
    }): string;
    signupOauth({ user }: {
        user: any;
    }): Promise<{
        refreshToken: string;
        accessToken: string;
    }>;
    loginOauth({ user }: {
        user: any;
    }): Promise<{
        refreshToken: string;
        accessToken: string;
    }>;
}

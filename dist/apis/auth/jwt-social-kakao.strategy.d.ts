import { Profile } from 'passport-kakao';
declare const JwtKakaoStrategy_base: new (...args: any[]) => any;
export declare class JwtKakaoStrategy extends JwtKakaoStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: Profile): {
        email: any;
        password: string;
        name: any;
        age: number;
    };
}
export {};

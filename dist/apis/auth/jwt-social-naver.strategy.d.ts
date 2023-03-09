import { Profile } from 'passport-naver';
declare const JwtNaverStrategy_base: new (...args: any[]) => any;
export declare class JwtNaverStrategy extends JwtNaverStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: Profile): {
        email: any;
        password: string;
        name: string;
        age: number;
    };
}
export {};

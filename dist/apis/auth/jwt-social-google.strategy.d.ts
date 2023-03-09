declare const JwtGoogleStrategy_base: new (...args: any[]) => any;
export declare class JwtGoogleStrategy extends JwtGoogleStrategy_base {
    constructor();
    validate(googleToken: any, refreshToken: any, profile: any): {
        email: any;
        nickname: any;
        name: any;
    };
}
export {};

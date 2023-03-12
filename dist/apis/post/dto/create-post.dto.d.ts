export declare class CreatePostDto {
    readonly restaurantId: number;
    readonly myListId: number;
    readonly content: string;
    readonly rating: number;
    readonly image: string;
    readonly visibility: 'public' | 'private';
    readonly hashtagNames?: string[];
}

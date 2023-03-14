import { PostService } from './post.service';
export declare class MyFeedController {
    private readonly postService;
    constructor(postService: PostService);
    getMyFeed(currentUser: any): Promise<{
        hashtags: string[];
        totalLikes: number;
        isLiked: any;
        id: number;
        content: string;
        rating: number;
        img_url: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        visibility: "public" | "private";
        restaurant: import("../restaurant/entities/restaurant.entity").Restaurant;
        images: import("./entities/image.entity").Image[];
        postLikes: import("./entities/post-like.entity").PostLike[];
        comments: import("../comment/entities/comment.entity").Comment[];
        user: import("../user/entities/user.entity").User;
        collectionItems: import("../collection/entities/collection-item.entity").CollectionItem[];
        postUserTags: import("./entities/post-usertag.entity").PostUserTag[];
    }[]>;
}

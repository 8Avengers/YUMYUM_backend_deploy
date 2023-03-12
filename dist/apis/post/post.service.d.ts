import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostLikeService } from './post-like.service';
import { PostHashtagService } from './post-hashtag.service';
import { MyListService } from '../collection/my-list.service';
export declare class PostService {
    private postRepository;
    private readonly likeService;
    private readonly postHashtagService;
    private readonly myListService;
    constructor(postRepository: Repository<Post>, likeService: PostLikeService, postHashtagService: PostHashtagService, myListService: MyListService);
    getPosts(userId: number): Promise<{
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
    getPostById(id: number, userId: number): Promise<{
        totalLikes: number;
        hashtags: {
            name: string;
        }[];
        isLiked: string;
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
    }>;
    createPost(userId: number, restaurantId: number, myListIds: number[], content: string, rating: number, img: string, visibility: any, hashtagNames: string[]): Promise<{
        postId: number;
    }>;
    updatePost(id: number, restaurantId: number, myListId: number[], content: string, rating: number, img: string, visibility: any, hashtagNames: string[]): Promise<{
        postId: number;
    }>;
    deletePost(id: number): Promise<void>;
}

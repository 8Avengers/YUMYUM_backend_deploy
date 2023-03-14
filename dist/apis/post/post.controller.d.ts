import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateRestaurantDto } from "../restaurant/dto/create-restaurant.dto";
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPostById(postId: number, currentUser: any): Promise<{
        user: {
            id: number;
            nickname: string;
            profile_image: string;
        };
        totalLikes: number;
        hashtags: {
            name: string;
        }[];
        isLiked: string;
        totalComments: number;
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
        collectionItems: import("../collection/entities/collection-item.entity").CollectionItem[];
        postUserTags: import("./entities/post-usertag.entity").PostUserTag[];
    }>;
    getPosts(currentUser: any): Promise<{
        user: {
            id: number;
            nickname: string;
            profile_image: string;
        };
        hashtags: string[];
        totalLikes: number;
        isLiked: any;
        totalComments: number;
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
        collectionItems: import("../collection/entities/collection-item.entity").CollectionItem[];
        postUserTags: import("./entities/post-usertag.entity").PostUserTag[];
    }[]>;
    createPost(data: CreatePostDto, restaurantData: CreateRestaurantDto, currentUser: any): Promise<{
        postId: number;
    }>;
    updateArticle(postId: number, data: Partial<UpdatePostDto>, restaurantData: CreateRestaurantDto): Promise<{
        postId: number;
    }>;
    deletePost(postId: number): Promise<void>;
}

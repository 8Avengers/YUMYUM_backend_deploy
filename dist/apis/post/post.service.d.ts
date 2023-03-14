import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostLikeService } from './post-like.service';
import { PostHashtagService } from './post-hashtag.service';
import { MyListService } from '../collection/my-list.service';
import { Comment } from '../comment/entities/comment.entity';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Image } from './entities/image.entity';
export declare class PostService {
    private postRepository;
    private commentRepository;
    private imageRepository;
    private readonly likeService;
    private readonly postHashtagService;
    private readonly myListService;
    private readonly restaurantService;
    constructor(postRepository: Repository<Post>, commentRepository: Repository<Comment>, imageRepository: Repository<Image>, likeService: PostLikeService, postHashtagService: PostHashtagService, myListService: MyListService, restaurantService: RestaurantService);
    getPosts(userId: number): Promise<{
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
        images: Image[];
        postLikes: import("./entities/post-like.entity").PostLike[];
        comments: Comment[];
        collectionItems: import("../collection/entities/collection-item.entity").CollectionItem[];
        postUserTags: import("./entities/post-usertag.entity").PostUserTag[];
    }[]>;
    getPostById(postId: number, userId: number): Promise<{
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
        images: Image[];
        postLikes: import("./entities/post-like.entity").PostLike[];
        comments: Comment[];
        collectionItems: import("../collection/entities/collection-item.entity").CollectionItem[];
        postUserTags: import("./entities/post-usertag.entity").PostUserTag[];
    }>;
    createPost(userId: number, address_name: string, category_group_code: string, category_group_name: string, category_name: string, kakao_place_id: string, phone: string, place_name: string, road_address_name: string, x: string, y: string, myListIds: number[], content: string, rating: number, img: string[], visibility: any, hashtagNames: string[]): Promise<{
        postId: number;
    }>;
    updatePost(id: number, address_name: string, category_group_code: string, category_group_name: string, category_name: string, kakao_place_id: string, phone: string, place_name: string, road_address_name: string, x: string, y: string, myListId: number[], content: string, rating: number, image: string[], visibility: any, hashtagNames: string[]): Promise<{
        postId: number;
    }>;
    deletePost(id: number): Promise<void>;
    getMyPosts(userId: number): Promise<{
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
        images: Image[];
        postLikes: import("./entities/post-like.entity").PostLike[];
        comments: Comment[];
        user: import("../user/entities/user.entity").User;
        collectionItems: import("../collection/entities/collection-item.entity").CollectionItem[];
        postUserTags: import("./entities/post-usertag.entity").PostUserTag[];
    }[]>;
}

import { Repository } from 'typeorm';
import { PostLike } from './entities/post-like.entity';
import { Post } from './entities/post.entity';
export declare class PostLikeService {
    private readonly postLikeRepository;
    private readonly postRepository;
    constructor(postLikeRepository: Repository<PostLike>, postRepository: Repository<Post>);
    getLikesForPost(postId: number): Promise<number>;
    getLikesForAllPosts(postIds: number[]): Promise<{
        postId: number;
        totalLikes: number;
    }[]>;
    likePost(postId: any, userId: any): Promise<void>;
    unlikePost(postId: any, userId: any): Promise<void>;
}

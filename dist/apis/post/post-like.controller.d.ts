import { PostLikeService } from './post-like.service';
export declare class PostLikeController {
    private readonly postLikeService;
    constructor(postLikeService: PostLikeService);
    likePost(postId: number): Promise<void>;
    unlikePost(postId: number): Promise<void>;
}

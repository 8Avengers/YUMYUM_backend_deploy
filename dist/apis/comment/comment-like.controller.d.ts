import { CommentLikeService } from './comment-like.service';
export declare class CommentLikeController {
    private readonly commentLikeService;
    constructor(commentLikeService: CommentLikeService);
    likeComment(commentId: number): Promise<void>;
    unlikeComment(commentId: number): Promise<void>;
}

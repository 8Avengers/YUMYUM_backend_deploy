import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CommentLikeService } from './comment-like.service';
import { Post } from '../post/entities/post.entity';
export declare class CommentService {
    private commentRepository;
    private postRepository;
    private readonly commentLikeService;
    constructor(commentRepository: Repository<Comment>, postRepository: Repository<Post>, commentLikeService: CommentLikeService);
    getAllComments(postId: number, userId: number): Promise<{
        totalLikes: number;
        isLiked: any;
        id: number;
        content: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        user: import("../user/entities/user.entity").User;
        post: Post;
        commentUserTags: import("./entities/comment-usertag.entity").CommentUserTag[];
        commentLikes: import("./entities/comment-like.entity").CommentLike[];
    }[]>;
    createComment(postId: number, userId: number, content: string): Promise<import("typeorm").InsertResult>;
    updateComment(postId: number, commentId: number, content: string): Promise<void>;
    deleteComment(postId: number, commentId: number): Promise<void>;
}

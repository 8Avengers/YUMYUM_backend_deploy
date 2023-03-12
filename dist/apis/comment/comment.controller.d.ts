import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getAllComments(postId: number): Promise<{
        user: string;
        totalLikes: number;
        id: number;
        content: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        post: import("../post/entities/post.entity").Post;
        commentUserTags: import("./entities/comment-usertag.entity").CommentUserTag[];
        commentLikes: import("./entities/comment-like.entity").CommentLike[];
    }[]>;
    createComment(postId: number, data: CreateCommentDto): Promise<import("typeorm").InsertResult>;
    updateComment(postId: number, commentId: number, data: UpdateCommentDto): Promise<void>;
    deleteComment(postId: number, commentId: number): Promise<void>;
}

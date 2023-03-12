import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getAllComments(postId: number, currentUser: any): Promise<{
        totalLikes: number;
        isLiked: any;
        id: number;
        content: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        user: import("../user/entities/user.entity").User;
        post: import("../post/entities/post.entity").Post;
        commentUserTags: import("./entities/comment-usertag.entity").CommentUserTag[];
        commentLikes: import("./entities/comment-like.entity").CommentLike[];
    }[]>;
    createComment(postId: number, data: CreateCommentDto, currentUser: any): Promise<import("typeorm").InsertResult>;
    updateComment(postId: number, commentId: number, data: UpdateCommentDto): Promise<void>;
    deleteComment(postId: number, commentId: number): Promise<void>;
}

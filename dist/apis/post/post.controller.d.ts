import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPostById(postId: number): Promise<import("./entities/post.entity").Post>;
    getPosts(): Promise<import("./entities/post.entity").Post[]>;
    createPost(restaurantId: number, data: CreatePostDto): Promise<import("typeorm").InsertResult>;
    updateArticle(postId: number, data: UpdatePostDto): Promise<void>;
    deletePost(postId: number): Promise<void>;
}

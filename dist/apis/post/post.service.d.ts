import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    getPosts(): Promise<Post[]>;
    getPostById(id: number): Promise<Post>;
    createPost(restaurantId: number, content: string, rating: number, img: string): Promise<import("typeorm").InsertResult>;
    updatePost(id: number, content: string, rating: number, img: string): Promise<void>;
    deletePost(id: number): Promise<void>;
}

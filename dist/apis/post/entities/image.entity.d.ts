import { Post } from './post.entity';
export declare class Image {
    id: number;
    file_name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    post: Post;
}

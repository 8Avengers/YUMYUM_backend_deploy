import { Repository } from 'typeorm';
import { Post } from '../post/entities/post.entity';
import { CollectionItem } from './entities/collection-item.entity';
import { Collection } from './entities/collection.entity';
import { CreateCollectionDto } from './dto/create-collection.dto';
export declare class BookmarkService {
    private bookmarkRepository;
    private collectionRepository;
    private postRepository;
    constructor(bookmarkRepository: Repository<Collection>, collectionRepository: Repository<CollectionItem>, postRepository: Repository<Post>);
    getBookmarks(): Promise<Collection[]>;
    getCollections(id: number): Promise<Collection[]>;
    createCollection(data: CreateCollectionDto): Promise<import("typeorm").InsertResult>;
    updateCollection(id: number, name: string): Promise<void>;
    deleteCollection(id: number): Promise<import("typeorm").UpdateResult>;
    collectionPlusPosting(collectionId: number, postId: number): Promise<void>;
    collectionPlusRestaurant(id: number, restaurantId: number): Promise<void>;
    collectionMinusPosting(id: number, postId: number): void;
    collectionMinusRestaurant(id: number, restaurantId: number): void;
}

import { BookmarkService } from './bookmark.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
export declare class BookmarkController {
    private readonly bookmarkService;
    constructor(bookmarkService: BookmarkService);
    getBookmarks(): Promise<import("./entities/collection.entity").Collection[]>;
    getCollections(collectionId: number): Promise<import("./entities/collection.entity").Collection[]>;
    createCollection(data: CreateCollectionDto): Promise<import("typeorm").InsertResult>;
    updateCollection(collectionId: number, name: string): Promise<void>;
    deleteCollection(collectionId: number): Promise<import("typeorm").UpdateResult>;
    collectionPlusPosting(collectionId: number, postId: number): Promise<void>;
    collectionPlusRestaurant(collectionId: number, restaurantId: number): Promise<void>;
    collectionMinusPosting(collectionId: number, postId: number): Promise<void>;
    collectionMinusRestaurant(collectionId: number, restaurantId: number): Promise<void>;
}

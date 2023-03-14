import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CollectionItem } from './entities/collection-item.entity';
export declare class MyListService {
    private collectionRepository;
    private collectionItemRepository;
    constructor(collectionRepository: Repository<Collection>, collectionItemRepository: Repository<CollectionItem>);
    getMyList(userId: number): Promise<{
        collectionItems: CollectionItem[];
        id: number;
        type: string;
        name: string;
        description: string;
        image: string;
        user_id: number;
        visibility: "public" | "private";
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        user: import("../user/entities/user.entity").User;
    }[]>;
    createMyList(userId: number, name: string, type: 'myList'): Promise<import("typeorm").InsertResult>;
    updateMyList(userId: number, collectionId: number, name: string, image: string, description: string, visibility: 'public' | 'private'): Promise<void>;
    deleteMyList(id: number): Promise<void>;
    myListPlusPosting(postId: number, collectionId: number[]): Promise<void>;
    myListMinusPosting(postId: number, collectionId: number): Promise<void>;
}

import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CollectionItem } from './entities/collection-item.entity';
export declare class MyListService {
    private collectionRepository;
    private collectionItemRepository;
    constructor(collectionRepository: Repository<Collection>, collectionItemRepository: Repository<CollectionItem>);
    getMyList(userId: number): Promise<Collection[][]>;
    createMyList(userId: number, name: string, type: 'myList'): Promise<import("typeorm").InsertResult>;
    updateMyList(userId: number, collectionId: number, name: string, image: string, description: string, visibility: 'public' | 'private'): Promise<void>;
    deleteMyList(id: number): Promise<void>;
    myListPlusPosting(postId: number, collectionId: number[]): Promise<void>;
}

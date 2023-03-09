import { User } from 'src/apis/user/entities/user.entity';
import { CollectionItem } from './collection-item.entity';
export declare class Collection {
    id: number;
    type: string;
    name: string;
    description: string;
    image: string;
    visibility: 'public' | 'private';
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    collectionItems: CollectionItem[];
    user: User;
}

import { Post } from '../../post/entities/post.entity';
import { CollectionItem } from '../../collection/entities/collection-item.entity';
export declare class Restaurant {
    id: number;
    name: string;
    category_name: string;
    category_group_name: string;
    phone_number: string;
    img_url: string;
    kakao_place_id: string;
    latitude: number;
    longitude: number;
    number_address: string;
    road_address: string;
    createdAt: Date;
    updatedAt: Date;
    deleted_at: Date;
    posts: Post[];
    collectionItems: CollectionItem[];
}

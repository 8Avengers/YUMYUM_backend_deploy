import { Post } from 'src/apis/post/entities/post.entity';
import { Restaurant } from 'src/apis/restaurant/entities/restaurant.entity';
import { Collection } from './collection.entity';
export declare class CollectionItem {
    id: number;
    collection: Collection;
    restaurant: Restaurant;
    post: Post;
}

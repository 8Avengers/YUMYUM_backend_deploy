import { Repository } from 'typeorm/repository/Repository';
import { Restaurant } from './entities/restaurant.entity';
export declare class RestaurantService {
    private restaurantRepository;
    constructor(restaurantRepository: Repository<Restaurant>);
    getRestaurant(id: string): Promise<Restaurant[]>;
    createRestaurant(name: string, category_name: string, category_group_name: string, phone_number: string, img_url: string, kakao_place_id: string, latitude: number, longitude: number, number_address: string, road_address: string): Promise<import("typeorm").InsertResult>;
}

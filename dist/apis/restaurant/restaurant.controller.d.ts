import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurant.service';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    getRestaurantDetails(restaurantId: string): Promise<import("./entities/restaurant.entity").Restaurant[]>;
    CreateRestaurant(data: CreateRestaurantDto): Promise<import("typeorm").InsertResult>;
}

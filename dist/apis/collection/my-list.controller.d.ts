import { CreateMyListDto } from './dto/create-my-list.dto';
import { UpdateMyListDto } from './dto/update-my-list.dto';
import { MyListService } from './my-list.service';
export declare class MyListController {
    private readonly myListService;
    constructor(myListService: MyListService);
    getMyLists(userId: number): Promise<import("./entities/collection.entity").Collection[]>;
    createMyList(data: CreateMyListDto): Promise<import("typeorm").InsertResult>;
    updateMyList(collectionId: number, data: UpdateMyListDto): Promise<void>;
    deleteMyList(collectionId: number): Promise<void>;
    myListPlusPosting(collectionId: number): Promise<void>;
}

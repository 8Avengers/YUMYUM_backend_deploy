import { minusCollectionPostingDto } from './dto/minus-bookmark-posting.dto';
import { CreateMyListDto } from './dto/create-my-list.dto';
import { UpdateMyListDto } from './dto/update-my-list.dto';
import { MyListService } from './my-list.service';
import { addCollectionPostingDto } from './dto/add-my-list-posting.dto';
export declare class MyListController {
    private readonly myListService;
    constructor(myListService: MyListService);
    getMyLists(userId: number): Promise<{
        collectionItems: import("./entities/collection-item.entity").CollectionItem[];
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
    createMyList(data: CreateMyListDto): Promise<import("typeorm").InsertResult>;
    updateMyList(collectionId: number, data: UpdateMyListDto): Promise<void>;
    deleteMyList(collectionId: number): Promise<void>;
    myListPlusPosting(postId: number, data: addCollectionPostingDto): Promise<void>;
    myListMinusPosting(postId: number, data: minusCollectionPostingDto): Promise<void>;
}

import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class ProfileService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
}

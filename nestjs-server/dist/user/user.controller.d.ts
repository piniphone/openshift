import { UserSignupDTO } from './dto/index';
import { UserService } from './user.service';
export declare class UserController {
    private userSertvice;
    constructor(userSertvice: UserService);
    signup(data: UserSignupDTO): Promise<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUser(req: any): Promise<import("./user.schema").User>;
}

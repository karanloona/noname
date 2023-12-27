/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Users } from "./users.schema";
import { Model } from "mongoose";
import { CreateUserDTO, PasswordDTO } from "./auth.dto";
export declare class AuthDao {
    private userModel;
    private readonly saltOrRounds;
    constructor(userModel: Model<Users>);
    createUser(dto: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, Users> & Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    validateUser(username: string, password: string): Promise<any>;
    loginUser(username: string): Promise<any>;
    changePassword(dto: PasswordDTO): Promise<import("mongoose").UpdateWriteOpResult | {
        message: string;
    }>;
}

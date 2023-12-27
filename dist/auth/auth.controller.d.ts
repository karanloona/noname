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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AuthService } from "./auth.service";
import { CreateUserDTO, LoginDTO, PasswordDTO } from "./auth.dto";
import { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(dto: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, import("./users.schema").Users> & import("./users.schema").Users & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    loginUser(dto: LoginDTO): Promise<{
        error: string;
        access_token?: undefined;
    } | {
        access_token: string;
        error?: undefined;
    }>;
    test(req: Request): Promise<string>;
    changePassword(dto: PasswordDTO): Promise<import("mongoose").UpdateWriteOpResult | {
        message: string;
    }>;
}

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
import { CreateCompanyDTO, DeleteCompanyDTO, UpdateCompanyDTO } from "./company.dto";
import { CompanyService } from "./company.service";
import { CheckUser } from "src/auth/auth.dto";
import { Request } from 'express';
export declare class CompanyController {
    private readonly companySerivce;
    constructor(companySerivce: CompanyService);
    addCategory(dto: CreateCompanyDTO, req: Request): Promise<import("mongoose").Document<unknown, {}, import("./company.schema").Company> & import("./company.schema").Company & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllCompanies(req: Request): Promise<(import("mongoose").Document<unknown, {}, import("./company.schema").Company> & import("./company.schema").Company & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCompanyByCategoryId(id: string, req: Request): Promise<(import("mongoose").Document<unknown, {}, import("./company.schema").Company> & import("./company.schema").Company & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCompanyDetailById(id: string): Promise<any[]>;
    deleteCompanyById(id: string, dto: DeleteCompanyDTO, req: Request): Promise<import("mongodb").DeleteResult>;
    updateCompanyById(id: string, dto: UpdateCompanyDTO, req: Request): Promise<import("mongoose").UpdateWriteOpResult>;
    checkUser(dto: CheckUser): Promise<(import("mongoose").Document<unknown, {}, import("./company.schema").Company> & import("./company.schema").Company & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}

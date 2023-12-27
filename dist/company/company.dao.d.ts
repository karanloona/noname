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
import { Company } from "./company.schema";
import { Model } from "mongoose";
import { CreateCompanyDTO, UpdateCompanyDTO } from "./company.dto";
import { ObjectId } from "mongodb";
import { Users } from "src/auth/users.schema";
export declare class CompanyDao {
    private companyModel;
    private usersModel;
    constructor(companyModel: Model<Company>, usersModel: Model<Users>);
    createCompany(dto: CreateCompanyDTO): Promise<import("mongoose").Document<unknown, {}, Company> & Company & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllCompanies(): Promise<(import("mongoose").Document<unknown, {}, Company> & Company & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCompanyByCategoryId(categoryId: ObjectId): Promise<(import("mongoose").Document<unknown, {}, Company> & Company & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCompanyDetailById(companyId: ObjectId): Promise<any[]>;
    deleteCompanyById(companyId: ObjectId, userId: ObjectId): Promise<import("mongodb").DeleteResult>;
    updateCompanyById(companyId: ObjectId, dto: UpdateCompanyDTO): Promise<import("mongoose").UpdateWriteOpResult>;
    checkUser(companyId: ObjectId, userId: ObjectId): Promise<(import("mongoose").Document<unknown, {}, Company> & Company & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}

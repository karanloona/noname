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
import { UnprocessableEntityException } from "@nestjs/common";
import { CreateFolderDTO, UpdateFolderDTO, contactDTO } from "./files.dto";
import { Model } from "mongoose";
import { Files } from "./files.schema";
import { ObjectId } from "mongodb";
import { Contact } from "./contact.schema";
export declare class FilesDao {
    private filesModel;
    private contactModel;
    private accessKeyId;
    private secretAccessKey;
    private role;
    private region;
    private bucket;
    constructor(filesModel: Model<Files>, contactModel: Model<Contact>);
    createFolder(dto: CreateFolderDTO): Promise<any>;
    getFoldersByCompanyId(companyId: ObjectId): Promise<(import("mongoose").Document<unknown, {}, Files> & Files & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getFilesByFolderIdAndCompanyId(companyId: ObjectId, folderId: ObjectId): Promise<{
        files: any;
        folderName: any;
    }>;
    uploadFiles(files: any): Promise<any[] | {
        isSuccess: boolean;
        err: any;
    }>;
    getFile(fileKey: string): Promise<string>;
    updateFolderFiles(folderId: ObjectId, files: any): Promise<import("mongoose").UpdateWriteOpResult>;
    deleteFolder(folderId: ObjectId): Promise<import("mongodb").DeleteResult>;
    updateFolder(dto: UpdateFolderDTO): Promise<import("mongoose").UpdateWriteOpResult | UnprocessableEntityException>;
    deleteFileFromFolder(folderId: ObjectId, file: string): Promise<import("mongoose").UpdateWriteOpResult>;
    contact(dto: contactDTO): Promise<import("mongoose").Document<unknown, {}, Contact> & Contact & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

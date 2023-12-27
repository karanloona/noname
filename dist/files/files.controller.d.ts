/// <reference types="multer" />
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
import { CreateFolderDTO, UpdateFolderDTO, contactDTO, deleteFileFromFolderDTO, fileRequestDTO, sendMailDTO } from "./files.dto";
import { FilesService } from "./files.service";
import { Request } from 'express';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    createFolder(req: Request, dto: CreateFolderDTO): Promise<any>;
    getFoldersByCompanyId(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./files.schema").Files> & import("./files.schema").Files & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    uploadFiles(files: {
        files: Express.Multer.File[];
    }, folderId: any, req: Request): Promise<import("mongoose").UpdateWriteOpResult>;
    getFile(dto: fileRequestDTO): Promise<string>;
    getFilesByFolderIdAndCompanyId(companyId: string, folderId: string): Promise<{
        files: any;
        folderName: any;
    }>;
    deleteFolder(id: string, req: Request): Promise<import("mongodb").DeleteResult>;
    updateFolder(dto: UpdateFolderDTO, req: Request): Promise<import("mongoose").UpdateWriteOpResult | import("@nestjs/common").UnprocessableEntityException>;
    deleteFileFromFolder(dto: deleteFileFromFolderDTO, req: Request): Promise<import("mongoose").UpdateWriteOpResult>;
    sendEmail(dto: sendMailDTO): Promise<boolean>;
    contact(dto: contactDTO): Promise<import("mongoose").Document<unknown, {}, import("./contact.schema").Contact> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

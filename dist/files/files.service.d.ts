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
import { CreateFolderDTO, UpdateFolderDTO, contactDTO, sendMailDTO } from "./files.dto";
import { FilesDao } from "./files.dao";
import { SesService } from '@nextnm/nestjs-ses';
export declare class FilesService {
    private readonly filesDao;
    private sesService;
    constructor(filesDao: FilesDao, sesService: SesService);
    createFolder(dto: CreateFolderDTO): Promise<any>;
    getFoldersByCompanyId(companyId: string): Promise<(import("mongoose").Document<unknown, {}, import("./files.schema").Files> & import("./files.schema").Files & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getFilesByFolderIdAndCompanyId(companyId: string, folderId: string): Promise<{
        files: any;
        folderName: any;
    }>;
    uploadFiles(files: any, folderId: any): Promise<import("mongoose").UpdateWriteOpResult>;
    getFile(fileKey: string): Promise<string>;
    deleteFolder(id: string): Promise<import("mongodb").DeleteResult>;
    updateFolder(dto: UpdateFolderDTO): Promise<import("mongoose").UpdateWriteOpResult | import("@nestjs/common").UnprocessableEntityException>;
    deleteFileFromFolder(folderId: string, file: string): Promise<import("mongoose").UpdateWriteOpResult>;
    sendEmail(dto: sendMailDTO): Promise<boolean>;
    contact(dto: contactDTO): Promise<import("mongoose").Document<unknown, {}, import("./contact.schema").Contact> & import("./contact.schema").Contact & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

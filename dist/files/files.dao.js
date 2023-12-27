"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesDao = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongodb_1 = require("mongodb");
const client_sts_1 = require("@aws-sdk/client-sts");
const client_s3_1 = require("@aws-sdk/client-s3");
const uuid_1 = require("uuid");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const common_constant_1 = require("../constants/common.constant");
let FilesDao = class FilesDao {
    constructor(filesModel, contactModel) {
        this.filesModel = filesModel;
        this.contactModel = contactModel;
        this.accessKeyId = common_constant_1.AWS_ACCESS_KEY_ID;
        this.secretAccessKey = common_constant_1.AWS_SECRET_ACCESS_KEY;
        this.role = common_constant_1.AWS_S3_ROLE;
        this.region = common_constant_1.AWS_REGION;
        this.bucket = common_constant_1.AWS_S3_BUCKET;
    }
    async createFolder(dto) {
        const filter = {
            userId: dto.userId,
            folderName: dto.folderName,
        };
        const existingFolder = await this.filesModel.findOne(filter);
        if (existingFolder) {
            return new common_1.UnprocessableEntityException(`Folder already exists`);
        }
        else {
            const update = {
                $setOnInsert: dto,
            };
            const options = {
                upsert: true,
            };
            const result = await this.filesModel.updateOne(filter, update, options);
            return result;
        }
    }
    async getFoldersByCompanyId(companyId) {
        return await this.filesModel.find({ userId: companyId });
    }
    async getFilesByFolderIdAndCompanyId(companyId, folderId) {
        const res = await this.filesModel.find({ userId: companyId, _id: folderId });
        return { files: res[0].files, folderName: res[0].folderName };
    }
    async uploadFiles(files) {
        let result = [];
        for (let i = 0; i < files.files.length; i++) {
            const stsClient = new client_sts_1.STSClient({
                region: this.region,
                credentials: {
                    accessKeyId: this.accessKeyId,
                    secretAccessKey: this.secretAccessKey,
                },
            });
            const command = new client_sts_1.AssumeRoleCommand({
                RoleArn: this.role,
                RoleSessionName: `uploadSession`,
                DurationSeconds: 900,
            });
            const response = await stsClient.send(command);
            const s3 = new client_s3_1.S3Client({
                region: this.region,
                credentials: {
                    accessKeyId: response.Credentials.AccessKeyId,
                    secretAccessKey: response.Credentials.SecretAccessKey,
                    sessionToken: response.Credentials.SessionToken,
                },
            });
            const uniqueUUID = (0, uuid_1.v4)();
            const params = {
                Bucket: this.bucket,
                Key: `${uniqueUUID}/${String(files.files[i].originalname)}`,
                Body: files.files[i].buffer
            };
            try {
                const data = await s3.send(new client_s3_1.PutObjectCommand(params));
                result.push(params.Key);
            }
            catch (err) {
                return {
                    isSuccess: false,
                    err
                };
            }
        }
        return result;
    }
    async getFile(fileKey) {
        const stsClient = new client_sts_1.STSClient({
            region: this.region,
            credentials: {
                accessKeyId: this.accessKeyId,
                secretAccessKey: this.secretAccessKey,
            },
        });
        const command = new client_sts_1.AssumeRoleCommand({
            RoleArn: this.role,
            RoleSessionName: `uploadSession`,
            DurationSeconds: 900,
        });
        const response = await stsClient.send(command);
        const expirationTimeInSeconds = 30;
        const s3 = new client_s3_1.S3Client({
            region: this.region,
            credentials: {
                accessKeyId: response.Credentials.AccessKeyId,
                secretAccessKey: response.Credentials.SecretAccessKey,
                sessionToken: response.Credentials.SessionToken,
            },
        });
        const getObjectCommand = new client_s3_1.GetObjectCommand({ Bucket: this.bucket, Key: fileKey });
        const url = (0, s3_request_presigner_1.getSignedUrl)(s3, getObjectCommand, { expiresIn: expirationTimeInSeconds });
        return url;
    }
    async updateFolderFiles(folderId, files) {
        return await this.filesModel.updateOne({ _id: folderId }, { $push: { files: { $each: files } } });
    }
    async deleteFolder(folderId) {
        return await this.filesModel.deleteOne({ _id: folderId });
    }
    async updateFolder(dto) {
        const result = await this.filesModel.updateOne({
            _id: new mongodb_1.ObjectId(dto.folderId),
            folderName: { $ne: dto.folderName }
        }, {
            $set: { folderName: dto.folderName }
        });
        if (!result.modifiedCount) {
            return new common_1.UnprocessableEntityException(`Same Folder Exits`);
        }
        return result;
    }
    async deleteFileFromFolder(folderId, file) {
        return await this.filesModel.updateOne({ _id: folderId }, { $pull: { files: file } });
    }
    async contact(dto) {
        const createContact = {
            fullName: dto.fullname,
            email: dto.email,
            message: dto.message,
            date: dto.date,
            time: dto.time
        };
        const contact = new this.contactModel(createContact);
        return await contact.save();
    }
};
exports.FilesDao = FilesDao;
exports.FilesDao = FilesDao = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Files')),
    __param(1, (0, mongoose_1.InjectModel)('Contact')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], FilesDao);
//# sourceMappingURL=files.dao.js.map
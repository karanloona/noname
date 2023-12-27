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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const files_dao_1 = require("./files.dao");
const mongodb_1 = require("mongodb");
const nestjs_ses_1 = require("@nextnm/nestjs-ses");
let FilesService = class FilesService {
    constructor(filesDao, sesService) {
        this.filesDao = filesDao;
        this.sesService = sesService;
    }
    async createFolder(dto) {
        dto['userId'] = new mongodb_1.ObjectId(dto.userId);
        return await this.filesDao.createFolder(dto);
    }
    async getFoldersByCompanyId(companyId) {
        return await this.filesDao.getFoldersByCompanyId(new mongodb_1.ObjectId(companyId));
    }
    async getFilesByFolderIdAndCompanyId(companyId, folderId) {
        return await this.filesDao.getFilesByFolderIdAndCompanyId(new mongodb_1.ObjectId(companyId), new mongodb_1.ObjectId(folderId));
    }
    async uploadFiles(files, folderId) {
        const res = await this.filesDao.uploadFiles(files);
        return await this.filesDao.updateFolderFiles(new mongodb_1.ObjectId(folderId), res);
    }
    async getFile(fileKey) {
        return await this.filesDao.getFile(fileKey);
    }
    async deleteFolder(id) {
        return await this.filesDao.deleteFolder(new mongodb_1.ObjectId(id));
    }
    async updateFolder(dto) {
        return await this.filesDao.updateFolder(dto);
    }
    async deleteFileFromFolder(folderId, file) {
        return await this.filesDao.deleteFileFromFolder(new mongodb_1.ObjectId(folderId), file);
    }
    async sendEmail(dto) {
        const to = dto.to;
        const subject = 'Please Find this attachment';
        const res = await this.filesDao.getFile(dto.filename);
        const from = 'info@sbsaccounting.ca';
        const options = {
            from: from,
            to: to,
            subject: subject,
            html: `Thanks for choosing SBS Accounting. <br /><br /> Please Find the the attachment below. <br /><br /><a href='${res}' target="_blank">Download Now</a>`
        };
        return await this.sesService.sendEmail(options);
    }
    async contact(dto) {
        return await this.filesDao.contact(dto);
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [files_dao_1.FilesDao,
        nestjs_ses_1.SesService])
], FilesService);
//# sourceMappingURL=files.service.js.map
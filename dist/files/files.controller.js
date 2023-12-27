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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_dto_1 = require("./files.dto");
const files_service_1 = require("./files.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_gaurd_1 = require("../gaurds/jwt-auth.gaurd");
const platform_express_1 = require("@nestjs/platform-express");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    async createFolder(req, dto) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.filesService.createFolder(dto);
    }
    async getFoldersByCompanyId(id) {
        return await this.filesService.getFoldersByCompanyId(id);
    }
    async uploadFiles(files, folderId, req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.filesService.uploadFiles(files, folderId);
    }
    async getFile(dto) {
        return await this.filesService.getFile(dto.filename);
    }
    async getFilesByFolderIdAndCompanyId(companyId, folderId) {
        return await this.filesService.getFilesByFolderIdAndCompanyId(companyId, folderId);
    }
    async deleteFolder(id, req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.filesService.deleteFolder(id);
    }
    async updateFolder(dto, req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.filesService.updateFolder(dto);
    }
    async deleteFileFromFolder(dto, req) {
        if (req['user'].userType !== 'superadmin') {
            throw new common_1.UnauthorizedException();
        }
        return await this.filesService.deleteFileFromFolder(dto.folderId, dto.fileId);
    }
    async sendEmail(dto) {
        return await this.filesService.sendEmail(dto);
    }
    async contact(dto) {
        return await this.filesService.contact(dto);
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Post)('add/folder'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, files_dto_1.CreateFolderDTO]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "createFolder", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Get)('getFoldersByCompanyId/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getFoldersByCompanyId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Post)('upload/:folderId'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                },
                folderId: {
                    type: 'string',
                    description: 'folderId',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'files', maxCount: 10 },
    ])),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('folderId')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Post)('getFileInfo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [files_dto_1.fileRequestDTO]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getFile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Get)('getFilesFromFolder/:companyId/:folderId'),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Param)('folderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getFilesByFolderIdAndCompanyId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Delete)('deleteFolder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "deleteFolder", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Post)('update/folderDetails'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [files_dto_1.UpdateFolderDTO, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "updateFolder", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Post)('deleteFile/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [files_dto_1.deleteFileFromFolderDTO, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "deleteFileFromFolder", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, common_1.Post)('send-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [files_dto_1.sendMailDTO]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)('contact'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [files_dto_1.contactDTO]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "contact", null);
exports.FilesController = FilesController = __decorate([
    (0, swagger_1.ApiTags)('files'),
    (0, swagger_1.ApiBearerAuth)(jwt_auth_gaurd_1.API_BEARER_AUTH_NAME),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map
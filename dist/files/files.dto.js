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
exports.contactDTO = exports.sendMailDTO = exports.fileRequestDTO = exports.deleteFileFromFolderDTO = exports.UpdateFolderDTO = exports.CreateFolderDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
class CreateFolderDTO {
}
exports.CreateFolderDTO = CreateFolderDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '654279b1b83f726f518ee9b4' }),
    __metadata("design:type", mongodb_1.ObjectId)
], CreateFolderDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'folder 1' }),
    __metadata("design:type", String)
], CreateFolderDTO.prototype, "folderName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['123.pdf', '234.pdf'], required: false }),
    __metadata("design:type", Array)
], CreateFolderDTO.prototype, "files", void 0);
class UpdateFolderDTO {
}
exports.UpdateFolderDTO = UpdateFolderDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '654279b1b83f726f518ee9b4' }),
    __metadata("design:type", mongodb_1.ObjectId)
], UpdateFolderDTO.prototype, "folderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'folder 1' }),
    __metadata("design:type", String)
], UpdateFolderDTO.prototype, "folderName", void 0);
class deleteFileFromFolderDTO {
}
exports.deleteFileFromFolderDTO = deleteFileFromFolderDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '654279b1b83f726f518ee9b4' }),
    __metadata("design:type", String)
], deleteFileFromFolderDTO.prototype, "folderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '13431-4t23-324twge/123.png' }),
    __metadata("design:type", String)
], deleteFileFromFolderDTO.prototype, "fileId", void 0);
class fileRequestDTO {
}
exports.fileRequestDTO = fileRequestDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], fileRequestDTO.prototype, "filename", void 0);
class sendMailDTO {
}
exports.sendMailDTO = sendMailDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], sendMailDTO.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], sendMailDTO.prototype, "to", void 0);
class contactDTO {
}
exports.contactDTO = contactDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], contactDTO.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], contactDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], contactDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], contactDTO.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], contactDTO.prototype, "time", void 0);
//# sourceMappingURL=files.dto.js.map
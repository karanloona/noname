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
exports.DeleteCompanyDTO = exports.UpdateCompanyDTO = exports.CreateCompanyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
class CreateCompanyDTO {
}
exports.CreateCompanyDTO = CreateCompanyDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '654279b1b83f726f518ee9b4' }),
    __metadata("design:type", mongodb_1.ObjectId)
], CreateCompanyDTO.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kfc' }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kfc@gmail.com' }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test1234' }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'toronto' }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "city", void 0);
class UpdateCompanyDTO {
}
exports.UpdateCompanyDTO = UpdateCompanyDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '654279b1b83f726f518ee9b4', required: false }),
    __metadata("design:type", mongodb_1.ObjectId)
], UpdateCompanyDTO.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kfc', required: false }),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'toronto', required: false }),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "city", void 0);
class DeleteCompanyDTO {
}
exports.DeleteCompanyDTO = DeleteCompanyDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '654279b1b83f726f518ee9b4' }),
    __metadata("design:type", String)
], DeleteCompanyDTO.prototype, "userId", void 0);
//# sourceMappingURL=company.dto.js.map
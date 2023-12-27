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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_gaurd_1 = require("../gaurds/jwt-auth.gaurd");
const company_dto_1 = require("./company.dto");
const company_service_1 = require("./company.service");
const auth_dto_1 = require("../auth/auth.dto");
let CompanyController = class CompanyController {
    constructor(companySerivce) {
        this.companySerivce = companySerivce;
    }
    async addCategory(dto, req) {
        if (req['user'].userType !== 'superadmin') {
            throw new common_1.UnauthorizedException();
        }
        return this.companySerivce.createCompany(dto);
    }
    async getAllCompanies(req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.companySerivce.getAllCompanies();
    }
    async getCompanyByCategoryId(id, req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.companySerivce.getCompanyByCategoryId(id);
    }
    async getCompanyDetailById(id) {
        return await this.companySerivce.getCompanyDetailById(id);
    }
    async deleteCompanyById(id, dto, req) {
        if (req['user'].userType !== 'superadmin') {
            throw new common_1.UnauthorizedException();
        }
        return await this.companySerivce.deleteCompanyById(id, dto.userId);
    }
    async updateCompanyById(id, dto, req) {
        if (req['user'].userType !== 'superadmin') {
            throw new common_1.UnauthorizedException();
        }
        return await this.companySerivce.updateCompanyById(id, dto);
    }
    async checkUser(dto) {
        return await this.companySerivce.checkUser(dto.companyId, dto.userId);
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_dto_1.CreateCompanyDTO, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getAllCompanies", null);
__decorate([
    (0, common_1.Get)('/byCategory/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompanyByCategoryId", null);
__decorate([
    (0, common_1.Get)('/detail/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompanyDetailById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, company_dto_1.DeleteCompanyDTO, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteCompanyById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, company_dto_1.UpdateCompanyDTO, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateCompanyById", null);
__decorate([
    (0, common_1.Post)('checkUser'),
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.CheckUser]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "checkUser", null);
exports.CompanyController = CompanyController = __decorate([
    (0, swagger_1.ApiTags)('company'),
    (0, common_1.Controller)('company'),
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, swagger_1.ApiBearerAuth)(jwt_auth_gaurd_1.API_BEARER_AUTH_NAME),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
//# sourceMappingURL=company.controller.js.map
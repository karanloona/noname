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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const company_dao_1 = require("./company.dao");
const auth_dao_1 = require("../auth/auth.dao");
const mongodb_1 = require("mongodb");
let CompanyService = class CompanyService {
    constructor(companyDao, authDao) {
        this.companyDao = companyDao;
        this.authDao = authDao;
    }
    async createCompany(dto) {
        const result = await this.authDao.createUser({ username: dto.email, password: dto.password, userType: 'member' });
        dto['userId'] = result._id;
        return await this.companyDao.createCompany(dto);
    }
    async getAllCompanies() {
        return await this.companyDao.getAllCompanies();
    }
    async getCompanyByCategoryId(categoryId) {
        return await this.companyDao.getCompanyByCategoryId(new mongodb_1.ObjectId(categoryId));
    }
    async getCompanyDetailById(companyId) {
        return await this.companyDao.getCompanyDetailById(new mongodb_1.ObjectId(companyId));
    }
    async deleteCompanyById(companyId, userId) {
        return await this.companyDao.deleteCompanyById(new mongodb_1.ObjectId(companyId), new mongodb_1.ObjectId(userId));
    }
    async updateCompanyById(companyId, dto) {
        return await this.companyDao.updateCompanyById(new mongodb_1.ObjectId(companyId), dto);
    }
    async checkUser(companyId, userId) {
        return await this.companyDao.checkUser(new mongodb_1.ObjectId(companyId), new mongodb_1.ObjectId(userId));
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [company_dao_1.CompanyDao,
        auth_dao_1.AuthDao])
], CompanyService);
//# sourceMappingURL=company.service.js.map
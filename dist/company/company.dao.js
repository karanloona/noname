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
exports.CompanyDao = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongodb_1 = require("mongodb");
let CompanyDao = class CompanyDao {
    constructor(companyModel, usersModel) {
        this.companyModel = companyModel;
        this.usersModel = usersModel;
    }
    async createCompany(dto) {
        const createCompany = {
            userId: new mongodb_1.ObjectId(dto.userId),
            categoryId: new mongodb_1.ObjectId(dto.categoryId),
            name: dto.name,
            city: dto.city
        };
        const category = new this.companyModel(createCompany);
        return await category.save();
    }
    async getAllCompanies() {
        return await this.companyModel.find();
    }
    async getCompanyByCategoryId(categoryId) {
        return await this.companyModel.find({ categoryId });
    }
    async getCompanyDetailById(companyId) {
        return await this.companyModel.aggregate([
            {
                $match: {
                    _id: companyId
                },
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    city: 1,
                    categoryId: 1,
                    userId: 1,
                    'category.name': 1
                }
            }
        ]).exec();
    }
    async deleteCompanyById(companyId, userId) {
        await this.usersModel.deleteOne({ _id: userId });
        return await this.companyModel.deleteOne({ _id: companyId });
    }
    async updateCompanyById(companyId, dto) {
        if (dto.categoryId) {
            dto['categoryId'] = new mongodb_1.ObjectId(dto.categoryId);
        }
        return await this.companyModel.updateOne({ _id: companyId }, dto);
    }
    async checkUser(companyId, userId) {
        return await this.companyModel.find({ _id: companyId, userId: userId });
    }
};
exports.CompanyDao = CompanyDao;
exports.CompanyDao = CompanyDao = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Company')),
    __param(1, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CompanyDao);
//# sourceMappingURL=company.dao.js.map
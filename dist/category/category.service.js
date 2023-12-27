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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_dao_1 = require("./category.dao");
const mongodb_1 = require("mongodb");
let CategoryService = class CategoryService {
    constructor(categoryDao) {
        this.categoryDao = categoryDao;
    }
    async createCategory(dto) {
        return await this.categoryDao.createCategory(dto);
    }
    async getAllCategories() {
        return await this.categoryDao.getAllCategories();
    }
    async getCategoryDetailById(id) {
        return await this.categoryDao.getCategoryDetailById(new mongodb_1.ObjectId(id));
    }
    async deleteCategoryById(categoryId) {
        return await this.categoryDao.deleteCategoryById(new mongodb_1.ObjectId(categoryId));
    }
    async getCategoryCompany() {
        return await this.categoryDao.getCategoryCompany();
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_dao_1.CategoryDao])
], CategoryService);
//# sourceMappingURL=category.service.js.map
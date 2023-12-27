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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const category_dto_1 = require("./category.dto");
const jwt_auth_gaurd_1 = require("../gaurds/jwt-auth.gaurd");
const category_service_1 = require("./category.service");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async addCategory(dto, req) {
        if (req['user'].userType !== 'superadmin') {
            throw new common_1.UnauthorizedException();
        }
        return this.categoryService.createCategory(dto);
    }
    async getAllCategories(req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.categoryService.getAllCategories();
    }
    async getCategoryDetailById(id, req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.categoryService.getCategoryDetailById(id);
    }
    async deleteCategoryById(id, req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.categoryService.deleteCategoryById(id);
    }
    async getCategoryCompany(req) {
        if (req['user'].userType === 'member') {
            throw new common_1.UnauthorizedException();
        }
        return await this.categoryService.getCategoryCompany();
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.AddCategoryDTO, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Get)('/detail/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryDetailById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategoryById", null);
__decorate([
    (0, common_1.Get)('getCategoryCompany'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryCompany", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('category'),
    (0, common_1.Controller)('category'),
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, swagger_1.ApiBearerAuth)(jwt_auth_gaurd_1.API_BEARER_AUTH_NAME),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const category_controller_1 = require("./category.controller");
const category_service_1 = require("./category.service");
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("./category.schema");
const jwt_strategy_1 = require("../strategy/jwt.strategy");
const local_strategy_1 = require("../strategy/local.strategy");
const database_module_1 = require("../database/database.module");
const jwt_module_1 = require("../database/jwt.module");
const auth_module_1 = require("../auth/auth.module");
const category_dao_1 = require("./category.dao");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            jwt_module_1.JwtClassModule,
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Category', schema: category_schema_1.CategorySchema }]),
        ],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService, category_dao_1.CategoryDao, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy]
    })
], CategoryModule);
//# sourceMappingURL=category.module.js.map
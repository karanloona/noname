"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const company_controller_1 = require("./company.controller");
const company_service_1 = require("./company.service");
const company_dao_1 = require("./company.dao");
const auth_module_1 = require("../auth/auth.module");
const jwt_module_1 = require("../database/jwt.module");
const database_module_1 = require("../database/database.module");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_strategy_1 = require("../strategy/jwt.strategy");
const local_strategy_1 = require("../strategy/local.strategy");
const company_schema_1 = require("./company.schema");
const users_schema_1 = require("../auth/users.schema");
let CompanyModule = class CompanyModule {
};
exports.CompanyModule = CompanyModule;
exports.CompanyModule = CompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            jwt_module_1.JwtClassModule,
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Company', schema: company_schema_1.CompanySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: users_schema_1.UsersSchema }]),
        ],
        controllers: [company_controller_1.CompanyController],
        providers: [company_service_1.CompanyService, company_dao_1.CompanyDao, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy]
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map
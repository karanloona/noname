"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const database_module_1 = require("../database/database.module");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("./users.schema");
const auth_dao_1 = require("./auth.dao");
const jwt_module_1 = require("../database/jwt.module");
const local_strategy_1 = require("../strategy/local.strategy");
const jwt_strategy_1 = require("../strategy/jwt.strategy");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_module_1.JwtClassModule,
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: users_schema_1.UsersSchema }]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_dao_1.AuthDao, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService, auth_dao_1.AuthDao]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
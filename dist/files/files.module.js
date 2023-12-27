"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const database_module_1 = require("../database/database.module");
const jwt_module_1 = require("../database/jwt.module");
const files_controller_1 = require("./files.controller");
const files_service_1 = require("./files.service");
const files_dao_1 = require("./files.dao");
const local_strategy_1 = require("../strategy/local.strategy");
const jwt_strategy_1 = require("../strategy/jwt.strategy");
const mongoose_1 = require("@nestjs/mongoose");
const files_schema_1 = require("./files.schema");
const nestjs_ses_1 = require("@nextnm/nestjs-ses");
const contact_schema_1 = require("./contact.schema");
let FilesModule = class FilesModule {
};
exports.FilesModule = FilesModule;
exports.FilesModule = FilesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_ses_1.SesModule.forRoot({
                secret: 'Umzox1X0g+XCZIAGM7uEWkMwabbsSZ7sIC/Xaj/r',
                apiKey: 'AKIAVLLMF5BKSDO3XNN6',
                region: 'ap-south-1',
            }),
            auth_module_1.AuthModule,
            jwt_module_1.JwtClassModule,
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Files', schema: files_schema_1.FilesSchema }, { name: 'Contact', schema: contact_schema_1.ContactSchema }]),
        ],
        controllers: [files_controller_1.FilesController],
        providers: [files_service_1.FilesService, files_dao_1.FilesDao, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy]
    })
], FilesModule);
//# sourceMappingURL=files.module.js.map
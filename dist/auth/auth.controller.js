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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./auth.dto");
const local_auth_gaurd_1 = require("../gaurds/local-auth.gaurd");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_gaurd_1 = require("../gaurds/jwt-auth.gaurd");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async createUser(dto) {
        return await this.authService.createUser(dto);
    }
    async loginUser(dto) {
        return await this.authService.loginUser(dto.username);
    }
    async test(req) {
        return 'test';
    }
    async changePassword(dto) {
        return await this.authService.changePassword(dto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('create/user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(local_auth_gaurd_1.LocalAuthGaurd),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, swagger_1.ApiBearerAuth)(jwt_auth_gaurd_1.API_BEARER_AUTH_NAME),
    (0, common_1.Get)('test'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "test", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGaurd),
    (0, swagger_1.ApiBearerAuth)(jwt_auth_gaurd_1.API_BEARER_AUTH_NAME),
    (0, common_1.Post)('change/password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.PasswordDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('login'),
    (0, swagger_1.ApiTags)('login'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map
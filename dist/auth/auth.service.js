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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_dao_1 = require("./auth.dao");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authDao, jwtService) {
        this.authDao = authDao;
        this.jwtService = jwtService;
    }
    async createUser(dto) {
        const res = await this.authDao.createUser(dto);
        return res;
    }
    async validateUser(username, password) {
        return await this.authDao.validateUser(username, password);
    }
    async loginUser(username) {
        const res = await this.authDao.loginUser(username);
        if (res instanceof Error) {
            return {
                error: 'No user Found'
            };
        }
        else {
            return {
                access_token: this.jwtService.sign(res),
            };
        }
    }
    async changePassword(dto) {
        return await this.authDao.changePassword(dto);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_dao_1.AuthDao, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
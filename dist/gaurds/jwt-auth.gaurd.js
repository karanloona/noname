"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGaurd = exports.API_BEARER_AUTH_NAME = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const common_constant_1 = require("../constants/common.constant");
exports.API_BEARER_AUTH_NAME = 'JWT-Auth';
let JwtAuthGaurd = class JwtAuthGaurd extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.headers['authorization'];
        if (authorizationHeader) {
            const token = authorizationHeader.replace('Bearer ', '');
            if (token === common_constant_1.secret) {
                return true;
            }
        }
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.JwtAuthGaurd = JwtAuthGaurd;
exports.JwtAuthGaurd = JwtAuthGaurd = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGaurd);
//# sourceMappingURL=jwt-auth.gaurd.js.map
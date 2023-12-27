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
exports.PasswordDTO = exports.CheckUser = exports.CreateUserDTO = exports.LoginDTO = exports.userType = void 0;
const swagger_1 = require("@nestjs/swagger");
class userType {
}
exports.userType = userType;
class LoginDTO {
}
exports.LoginDTO = LoginDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "superadmin@gmail.com" }),
    __metadata("design:type", String)
], LoginDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "superadmin" }),
    __metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);
class CreateUserDTO extends LoginDTO {
}
exports.CreateUserDTO = CreateUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CreateUserDTO.prototype, "userType", void 0);
class CheckUser {
}
exports.CheckUser = CheckUser;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckUser.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CheckUser.prototype, "userId", void 0);
class PasswordDTO {
}
exports.PasswordDTO = PasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "654740ef2c0e2dfff276de16" }),
    __metadata("design:type", String)
], PasswordDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "superadmin" }),
    __metadata("design:type", String)
], PasswordDTO.prototype, "password", void 0);
//# sourceMappingURL=auth.dto.js.map
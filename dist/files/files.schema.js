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
exports.FilesSchema = exports.Files = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongodb_1 = require("mongodb");
let Files = class Files {
};
exports.Files = Files;
__decorate([
    (0, mongoose_1.Prop)({ userId: mongodb_1.ObjectId, required: true }),
    __metadata("design:type", mongodb_1.ObjectId)
], Files.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Files.prototype, "folderName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ types: (Array), required: false }),
    __metadata("design:type", Array)
], Files.prototype, "files", void 0);
exports.Files = Files = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Files);
exports.FilesSchema = mongoose_1.SchemaFactory.createForClass(Files);
//# sourceMappingURL=files.schema.js.map
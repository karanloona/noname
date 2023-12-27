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
exports.AuthDao = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const mongodb_1 = require("mongodb");
let AuthDao = class AuthDao {
    constructor(userModel) {
        this.userModel = userModel;
        this.saltOrRounds = 10;
    }
    async createUser(dto) {
        const hash = await bcrypt.hash(dto.password, this.saltOrRounds);
        const user = new this.userModel({ username: dto.username, password: hash, userType: dto.userType });
        return await user.save();
    }
    async validateUser(username, password) {
        const user = await this.userModel.findOne({ username: username });
        if (!user) {
            return { message: 'wrong username' };
        }
        return await bcrypt.compare(password, user.password);
    }
    async loginUser(username) {
        const user = await this.userModel.aggregate([
            {
                $match: {
                    username: username
                }
            },
            {
                $lookup: {
                    from: 'companies',
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'result'
                }
            },
            {
                $project: {
                    _id: 1,
                    username: 1,
                    userType: 1,
                    companyId: "$result._id"
                }
            },
        ]).exec();
        if (!user) {
            return new Error('User does not exist');
        }
        return user[0];
    }
    async changePassword(dto) {
        const user = await this.userModel.findOne({ _id: new mongodb_1.ObjectId(dto.userId) });
        if (!user) {
            return { message: 'wrong username' };
        }
        const hash = await bcrypt.hash(dto.password, this.saltOrRounds);
        return await this.userModel.updateOne({ _id: new mongodb_1.ObjectId(dto.userId) }, { password: hash });
    }
};
exports.AuthDao = AuthDao;
exports.AuthDao = AuthDao = __decorate([
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthDao);
//# sourceMappingURL=auth.dao.js.map
import { InjectModel } from "@nestjs/mongoose";
import { Users } from "./users.schema";
import { Model } from "mongoose";
import { CreateUserDTO, LoginDTO, PasswordDTO } from "./auth.dto";
import * as bcrypt from 'bcrypt';
import { NotFoundException } from "@nestjs/common";
import { ObjectId } from "mongodb";


export class AuthDao {
    private readonly saltOrRounds = 10;
    constructor(@InjectModel('User') private userModel: Model<Users>) {}

    async createUser(dto:CreateUserDTO) {
        const hash = await bcrypt.hash(dto.password, this.saltOrRounds);
        const user = new this.userModel({ username: dto.username, password: hash, userType: dto.userType });
        return await user.save();
    }

    async validateUser(username: string, password:string) {
        const user = await this.userModel.findOne({ username: username });
        if (!user) {
            // Handle user not found
            return { message: 'wrong username' };
        }
        return await bcrypt.compare(password, user.password);
        
        
    }

    async loginUser(username:string) {
        const user:any = await this.userModel.aggregate([
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
                  username:1,
                  userType: 1,
                  companyId: "$result._id"
                }
            },
        ]).exec();
        
        if(!user){
            return new Error('User does not exist');
        }
        
        return user[0];
    }

    async changePassword(dto: PasswordDTO) {
        const user = await this.userModel.findOne({ _id: new ObjectId(dto.userId) });
        if (!user) {
            // Handle user not found
            return { message: 'wrong username' };
        }
        const hash = await bcrypt.hash(dto.password, this.saltOrRounds);
        return await this.userModel.updateOne({ _id: new ObjectId(dto.userId) }, {password: hash})
    }
    
}
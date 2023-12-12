import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Company } from "./company.schema";
import { Model } from "mongoose";
import { CreateCompanyDTO, UpdateCompanyDTO } from "./company.dto";
import { ObjectId } from "mongodb";

@Injectable()
export class CompanyDao {
    constructor(@InjectModel('Company') private companyModel: Model<Company>) {}

    async createCompany(dto:CreateCompanyDTO) {
        const createCompany:Company = {
            userId:new ObjectId(dto.userId),
            categoryId: new ObjectId(dto.categoryId),
            name: dto.name,
            city: dto.city
        };
        const category = new this.companyModel(createCompany);
        return await category.save();
    }

    async getAllCompanies(){
        return await this.companyModel.find();
    }

    async getCompanyByCategoryId (categoryId:ObjectId) {
        return await this.companyModel.find({ categoryId });
    }

    async getCompanyDetailById(companyId:ObjectId){
        return await this.companyModel.aggregate([
          {
            $match: {
              _id: companyId
            },
          },
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category'
            }
          },
          {
            $project: {
              _id: 0,
              name: 1,
              city: 1,
              categoryId: 1,
              userId: 1,
              'category.name': 1
            }
          }
          
      ]).exec();
    }

    async deleteCompanyById(companyId:ObjectId){
        return await this.companyModel.deleteOne({ _id: companyId });
    }

    async updateCompanyById(companyId:ObjectId, dto:UpdateCompanyDTO){
      if(dto.categoryId){
          dto['categoryId'] = new ObjectId(dto.categoryId);
      }
      return await this.companyModel.updateOne({_id: companyId}, dto);
    }

    async checkUser(companyId: ObjectId, userId: ObjectId) {
      return await this.companyModel.find({_id: companyId, userId: userId})
    }
}
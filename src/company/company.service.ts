import { Injectable } from "@nestjs/common";
import { CompanyDao } from "./company.dao";
import { CreateCompanyDTO, UpdateCompanyDTO } from "./company.dto";
import { AuthDao } from "../auth/auth.dao";
import { ObjectId } from "mongodb";

@Injectable()
export class CompanyService {
    constructor(
        private readonly companyDao:CompanyDao,
        private readonly authDao:AuthDao
    ) {}

    async createCompany(dto:CreateCompanyDTO){
        const result = await this.authDao.createUser({username: dto.email, password:dto.password, userType: 'member' })
        dto['userId'] = result._id;
        return await this.companyDao.createCompany(dto)
    }

    async getAllCompanies() {
        return await this.companyDao.getAllCompanies();
    }

    async getCompanyByCategoryId(categoryId:string) {
        return await this.companyDao.getCompanyByCategoryId(new ObjectId(categoryId));
    }

    async getCompanyDetailById(companyId:string) {
        return await this.companyDao.getCompanyDetailById(new ObjectId(companyId));
    }

    async deleteCompanyById(companyId:string, userId: string) {
        return await this.companyDao.deleteCompanyById(new ObjectId(companyId), new ObjectId(userId));
    }
    
    async updateCompanyById(companyId:string, dto:UpdateCompanyDTO) {
        return await this.companyDao.updateCompanyById(new ObjectId(companyId), dto);
    }

    async checkUser(companyId: string, userId: string) {
        return await this.companyDao.checkUser(new ObjectId(companyId), new ObjectId(userId));
    }
}
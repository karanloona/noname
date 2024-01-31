import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UnauthorizedException, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { API_BEARER_AUTH_NAME, JwtAuthGaurd } from "../gaurds/jwt-auth.gaurd";
import { CreateCompanyDTO, DeleteCompanyDTO, UpdateCompanyDTO } from "./company.dto";
import { CompanyService } from "./company.service";
import { CheckUser } from "../auth/auth.dto";
import { Request } from 'express';

@ApiTags('company')
@Controller('company')
@UseGuards(JwtAuthGaurd)
@ApiBearerAuth(API_BEARER_AUTH_NAME)
export class CompanyController {
    constructor(private readonly companySerivce:CompanyService) {}
    @Post('add')
    async addCategory(@Body() dto:CreateCompanyDTO, @Req() req: Request){
        if(req['user'].userType !== 'superadmin'){
            throw new UnauthorizedException();
        }
        return this.companySerivce.createCompany(dto);
    }
    @Get('/all')
    async getAllCompanies(@Req() req: Request){
        if(req['user'].userType === 'member'){
            throw new UnauthorizedException();
        }
        return await this.companySerivce.getAllCompanies();
    }

    @Get('/byCategory/:id')
    async getCompanyByCategoryId(@Param('id') id:string, @Req() req: Request){
        if(req['user'].userType === 'member'){
            throw new UnauthorizedException();
        }
        return await this.companySerivce.getCompanyByCategoryId(id);
    }

    @Get('/detail/:id')
    async getCompanyDetailById(@Param('id') id:string) {
        return await this.companySerivce.getCompanyDetailById(id);
    }
    
    @Delete(':id')
    async deleteCompanyById(@Param('id') id:string,@Body() dto: DeleteCompanyDTO, @Req() req: Request){
        if(req['user'].userType !== 'superadmin'){
            throw new UnauthorizedException();
        }
        return await this.companySerivce.deleteCompanyById(id, dto.userId);
    }

    @Patch(':id')
    async updateCompanyById(@Param('id') id:string, @Body() dto: UpdateCompanyDTO, @Req() req: Request) {
        if(req['user'].userType !== 'superadmin'){
            throw new UnauthorizedException();
        }
        return await this.companySerivce.updateCompanyById(id, dto);
    }


    @Post('checkUser')
    @UseGuards(JwtAuthGaurd)
    async checkUser(@Body() dto:CheckUser) {
        return await this.companySerivce.checkUser(dto.companyId, dto.userId);
    }
}
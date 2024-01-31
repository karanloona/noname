import { Module } from "@nestjs/common";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { CompanyDao } from "./company.dao";
import { AuthModule } from "../auth/auth.module";
import { JwtClassModule } from "../database/jwt.module";
import { DatabaseModule } from "../database/database.module";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtStrategy } from "../strategy/jwt.strategy";
import { LocalStrategy } from "../strategy/local.strategy";
import { CompanySchema } from "./company.schema";
import { UsersSchema } from "../auth/users.schema";

@Module({
    imports: [
        AuthModule,
        JwtClassModule,
        DatabaseModule,
        MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
        MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }]),
        
    ],
    controllers: [CompanyController],
    providers: [CompanyService, CompanyDao, LocalStrategy, JwtStrategy]
})

export class CompanyModule {}
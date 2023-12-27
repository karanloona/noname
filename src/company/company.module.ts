import { Module } from "@nestjs/common";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { CompanyDao } from "./company.dao";
import { AuthModule } from "src/auth/auth.module";
import { JwtClassModule } from "src/database/jwt.module";
import { DatabaseModule } from "src/database/database.module";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtStrategy } from "src/strategy/jwt.strategy";
import { LocalStrategy } from "src/strategy/local.strategy";
import { CompanySchema } from "./company.schema";
import { UsersSchema } from "src/auth/users.schema";

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
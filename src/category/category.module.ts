import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CategorySchema } from "./category.schema";
import { JwtStrategy } from "src/strategy/jwt.strategy";
import { LocalStrategy } from "src/strategy/local.strategy";
import { DatabaseModule } from "src/database/database.module";
import { JwtClassModule } from "src/database/jwt.module";
import { AuthModule } from "src/auth/auth.module";
import { CategoryDao } from "./category.dao";

@Module({
    imports: [
        AuthModule,
        JwtClassModule,
        DatabaseModule,
        MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
    ],
    controllers: [CategoryController],
    providers: [CategoryService, CategoryDao, LocalStrategy, JwtStrategy]
})

export class CategoryModule {}
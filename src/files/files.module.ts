import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { DatabaseModule } from "src/database/database.module";
import { JwtClassModule } from "src/database/jwt.module";
import { FilesController } from "./files.controller";
import { FilesService } from "./files.service";
import { FilesDao } from "./files.dao";
import { LocalStrategy } from "src/strategy/local.strategy";
import { JwtStrategy } from "src/strategy/jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";
import { FilesSchema } from "./files.schema";

@Module({
    imports: [
        AuthModule,
        JwtClassModule,
        DatabaseModule,
        MongooseModule.forFeature([{ name: 'Files', schema: FilesSchema }]),
    ],
    controllers: [FilesController],
    providers: [FilesService, FilesDao, LocalStrategy, JwtStrategy]
})

export class FilesModule {}
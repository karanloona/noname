import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatabaseModule } from "../database/database.module";
import { JwtClassModule } from "../database/jwt.module";
import { FilesController } from "./files.controller";
import { FilesService } from "./files.service";
import { FilesDao } from "./files.dao";
import { LocalStrategy } from "../strategy/local.strategy";
import { JwtStrategy } from "../strategy/jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";
import { FilesSchema } from "./files.schema";
import { SesModule } from '@nextnm/nestjs-ses';
import { ContactSchema } from "./contact.schema";


@Module({
    imports: [
        SesModule.forRoot({
            secret: 'Umzox1X0g+XCZIAGM7uEWkMwabbsSZ7sIC/Xaj/r',
            apiKey: 'AKIAVLLMF5BKSDO3XNN6',
            region: 'ap-south-1',
        }),
        AuthModule,
        JwtClassModule,
        DatabaseModule,
        MongooseModule.forFeature([{ name: 'Files', schema: FilesSchema }, {name: 'Contact', schema: ContactSchema}]),
    ],
    controllers: [FilesController],
    providers: [FilesService, FilesDao, LocalStrategy, JwtStrategy]
})

export class FilesModule {}
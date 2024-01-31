import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { DatabaseModule } from "../database/database.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersSchema } from "./users.schema";
import { AuthDao } from "./auth.dao";
import { JwtClassModule } from "../database/jwt.module";
import { LocalStrategy } from "../strategy/local.strategy";
import { JwtStrategy } from "../strategy/jwt.strategy";

@Module({
    imports: [
        JwtClassModule,
        DatabaseModule,
        MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }]),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthDao, LocalStrategy, JwtStrategy],
    exports: [AuthService, AuthDao]
})

export class AuthModule {}
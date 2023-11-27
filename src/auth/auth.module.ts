import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { DatabaseModule } from "src/database/database.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersSchema } from "./users.schema";
import { AuthDao } from "./auth.dao";
import { JwtClassModule } from "src/database/jwt.module";
import { LocalStrategy } from "src/strategy/local.strategy";
import { JwtStrategy } from "src/strategy/jwt.strategy";

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
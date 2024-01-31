import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { secret } from "../constants/common.constant";

@Module({
    imports: [
        JwtModule.register({
            global:true,
            secret: secret,
            signOptions: { expiresIn: '43200s' },
        }),
    ]
})

export class JwtClassModule {}
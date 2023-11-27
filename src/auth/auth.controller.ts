import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CheckUser, CreateUserDTO, LoginDTO } from "./auth.dto";
import { LocalAuthGaurd } from "src/gaurds/local-auth.gaurd";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { API_BEARER_AUTH_NAME, JwtAuthGaurd } from "src/gaurds/jwt-auth.gaurd";

@Controller('login')
@ApiTags('login')
export class AuthController {
    constructor(private readonly authService:AuthService) {}

    @Post('create/user')
    async createUser(@Body() dto:CreateUserDTO) {
        return await this.authService.createUser(dto);
    }

    @Post()
    @UseGuards(LocalAuthGaurd)
    async loginUser(@Body() dto:LoginDTO) {
        return await this.authService.loginUser(dto.username);
    }

    @UseGuards(JwtAuthGaurd)
    @ApiBearerAuth(API_BEARER_AUTH_NAME)
    @Get('test')
    async test(@Req() req: Request){
        return 'test';
    }
}
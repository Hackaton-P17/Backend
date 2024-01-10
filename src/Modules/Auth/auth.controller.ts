import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./Dtos/loginAuth.dto";
import { Public } from "./Decorators/public.decorator";
import { ApiTags } from "@nestjs/swagger";

@Controller('auth')
@ApiTags('auth')
export class AuthController{

    constructor(private readonly authService : AuthService){}

    @Public()
    @Post('login')
    async login(@Body(){username, password}: LoginDto) {
        return await this.authService.login(username, password);
    }

    @Get('check-token')
    async checkToken(){
        return true;
    }

}
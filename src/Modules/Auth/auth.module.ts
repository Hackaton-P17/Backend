import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guards";
import { UserModule } from "../User/user.module";
import { jwtConstants } from "./Constants/constants";

@Module({
    imports:[
        JwtModule.register({
            global : true,
            secret : jwtConstants,
            signOptions:{expiresIn : 8*60*60+"s"}
        }),UserModule
    ],
    controllers:[AuthController],
    providers:[AuthService,
     {provide : APP_GUARD,
     useClass : AuthGuard}
    ],
    exports: [AuthService],

})
export class AuthModule{
    
}
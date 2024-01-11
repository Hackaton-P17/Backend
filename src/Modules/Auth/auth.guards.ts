
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { jwtConstants } from './Constants/constants';
  import { Request } from 'express';
  import { IS_PUBLIC_KEY } from './Decorators/public.decorator';
  import { Reflector } from '@nestjs/core';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
      private jwtService: JwtService,
      private reflector: Reflector
      ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {

      // If the route is flaged @Public, no need to auth
      const isPublic = this.reflector.getAllAndOverride<boolean>(
        IS_PUBLIC_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (isPublic) {
          return true;
      }

      // If the route is not flaged @Public, We will auth
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      console.log(token)
      if (!token) {
        console.log('pas de token')
        throw new UnauthorizedException();
      }

      try {
        console.log("veryf async will begin")
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: jwtConstants
          }
        );
        console.log(payload)
        console.log(request['user'])
        request['user'] = payload;
      } catch {
          console.log('pas de payload')
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }
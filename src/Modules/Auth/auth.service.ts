import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../User/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userService.getUserByUsername(username);
    if (user !== null) {
      const result = await bcrypt.compare(password, user.password);

      if (!result) {
        throw new HttpException('Bad credentiels');
      }

      const payload = { role: user.role, id: user._id };

      return await this.jwtService.signAsync(payload);
    } else {
      throw new Error('Le login à échoué, veuiller vérifier vos identifiants.');
    }
  }
}

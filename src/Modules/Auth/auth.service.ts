import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../User/user.service';
import { UserEntity } from '../User/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(username: string, password: string) {
    const logged = await this.getFittingAccount(username, password);
    if (logged !== null) {
      const payload = {
        role: logged.role,
        logged: logged._id,
      };
      return this.jwtService.signAsync(payload);
    } else {
      throw new Error('Le login a échoué, veuillez vérifier vos identifiants.');
    }
  }

  private async getFittingAccount(
    username: string,
    password: string,
  ): Promise<UserEntity | null> {
    const user = await this.userService.getUserByUsername(username);
    if (user !== null) {
      return ((await bcrypt.compare(password, user.password)) as boolean)
        ? user
        : null;
    } else {
      return null;
    }
  }
}

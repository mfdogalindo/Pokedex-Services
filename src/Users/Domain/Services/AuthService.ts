import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from '../Models/TokenPayload.model';
import { User } from '../Models/User.model';

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  createToken(user: User) {
    const expiresIn = 3600;
    const payload: TokenPayload = {
      userId: user.id,
    };
    const accessToken = this.jwt.sign(payload, { expiresIn });
    return {
      expiresIn,
      accessToken,
    };
  }
}

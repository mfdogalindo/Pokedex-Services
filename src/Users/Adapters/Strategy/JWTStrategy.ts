import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UnauthorizedException } from 'src/Users/Domain/Exceptions/UsersExceptions';
import { TokenPayload } from 'src/Users/Domain/Models/TokenPayload.model';
import { User } from 'src/Users/Domain/Models/User.model';
import { UserStatus } from 'src/Users/Domain/Models/UserStatus.model';
import { UsersService } from 'src/Users/Domain/Services/UsersService';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: TokenPayload): Promise<User> {
    const user = await this.usersService.findById(payload.userId);
    if (user?.userStatus !== UserStatus.ACTIVE) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

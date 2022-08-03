import { Module } from '@nestjs/common';
import { UsersController } from './Adapters/Controller/UsersController';
import { UsersService } from './Domain/Services/UsersService';
import { UsersInMemory } from './Adapters/Repository/UsersInMemory';
import { UsersRepository } from './Adapters/Repository/UsersRepository';
import { AuthService } from './Domain/Services/AuthService';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Adapters/Strategy/JWTStrategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    JwtStrategy,
    {
      provide: UsersRepository,
      useClass: UsersInMemory,
    },
  ],
})
export class UsersModule {}

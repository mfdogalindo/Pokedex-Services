import { Module } from '@nestjs/common';
import { UsersController } from './Ports/Controller/UsersController';
import { UsersService } from './Domain/Services/UsersService';
import { UsersInMemory } from './Ports/Repository/UsersInMemory';
import { UsersRepository } from './Ports/Repository/UsersRepository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: UsersInMemory,
    },
  ],
})
export class UsersModule {}

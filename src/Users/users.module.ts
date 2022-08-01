import { Module } from '@nestjs/common';
import { UsersController } from './Adapters/Controller/UsersController';
import { UsersService } from './Domain/Services/UsersService';
import { UsersInMemory } from './Adapters/Repository/UsersInMemory';
import { UsersRepository } from './Adapters/Repository/UsersRepository';

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

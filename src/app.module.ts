import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { PokeApiModule } from './PokeApi/poke-api.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './Common/Exceptions/HttpExceptionFilter';

@Module({
  imports: [UsersModule, PokeApiModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}

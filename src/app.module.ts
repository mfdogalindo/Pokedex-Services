import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './Users/users.module';
import { PokeApiModule } from './PokeApi/poke-api.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './Common/Exceptions/HttpExceptionFilter';

@Module({
  imports: [
    UsersModule,
    PokeApiModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}

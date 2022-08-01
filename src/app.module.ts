import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { PokeApiModule } from './PokeApi/poke-api.module';

@Module({
  imports: [UsersModule, PokeApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

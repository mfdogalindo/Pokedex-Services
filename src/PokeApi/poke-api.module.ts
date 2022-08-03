import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PokeApiController } from './Adapters/Controller/PokeApiController';
import { PokeApiGateway } from './Adapters/Gateways/PokeApiGateway';
import { PokeApiGatewayImpl } from './Adapters/Gateways/PokeApiGatewayImpl';
import { AuthorityGuard } from './Adapters/Guards/AuthorityGuard';
import { PokeApiService } from './Domain/Service/PokeApiService';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [PokeApiController],
  providers: [
    PokeApiService,
    { provide: APP_GUARD, useClass: AuthorityGuard },
    { provide: PokeApiGateway, useClass: PokeApiGatewayImpl },
  ],
})
export class PokeApiModule {}

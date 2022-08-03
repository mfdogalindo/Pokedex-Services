import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokeApiController } from './Adapters/Controller/PokeApiController';
import { PokeApiGateway } from './Adapters/Gateways/PokeApiGateway';
import { PokeApiGatewayImpl } from './Adapters/Gateways/PokeApiGatewayImpl';
import { JwtClientStrategy } from './Adapters/Strategy/JwtStrategy';
import { PokeApiService } from './Domain/Service/PokeApiService';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [PokeApiController],
  providers: [
    JwtClientStrategy,
    PokeApiService,
    { provide: PokeApiGateway, useClass: PokeApiGatewayImpl },
  ],
})
export class PokeApiModule {}

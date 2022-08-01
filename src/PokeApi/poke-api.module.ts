import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokeApiController } from './Adapters/Controller/PokeApiController';
import { PokeApiGateway } from './Adapters/Gateways/PokeApiGateway';
import { PokeApiGatewayImpl } from './Adapters/Gateways/PokeApiGatewayImpl';
import { PokeApiService } from './Domain/Service/PokeApiService';

@Module({
  imports: [HttpModule],
  controllers: [PokeApiController],
  providers: [
    PokeApiService,
    { provide: PokeApiGateway, useClass: PokeApiGatewayImpl },
  ],
})
export class PokeApiModule {}

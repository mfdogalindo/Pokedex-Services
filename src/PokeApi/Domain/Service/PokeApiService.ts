import { Inject, Injectable } from '@nestjs/common';
import { PokeApiGateway } from 'src/PokeApi/Adapters/Gateways/PokeApiGateway';

@Injectable()
export class PokeApiService {
  constructor(
    @Inject(PokeApiGateway) private readonly pokeApiGateway: PokeApiGateway,
  ) {}

  async findByName(name: string): Promise<any> {
    return this.pokeApiGateway.findByName(name);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { PokeApiGateway } from 'src/PokeApi/Adapters/Gateways/PokeApiGateway';

@Injectable()
export class PokeApiService {
  constructor(
    @Inject(PokeApiGateway) private readonly pokeApiGateway: PokeApiGateway,
  ) {}

  async findPages(offset = 0, limit = 10): Promise<any> {
    return this.pokeApiGateway.findPages(offset, limit);
  }

  async findByName(name: string): Promise<any> {
    return this.pokeApiGateway.findByName(name);
  }
}

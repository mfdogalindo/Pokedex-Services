import { PokemonEntity } from 'src/PokeApi/Domain/Models/PokemonEntity.model';

export interface PokeApiGateway {
  findByName(name: string): Promise<PokemonEntity>;
  findPages(offset: number, limit: number): Promise<any>;
}

export const PokeApiGateway = Symbol('PokeApiGateway');

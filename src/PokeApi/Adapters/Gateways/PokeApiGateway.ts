import { PokemonEntity } from 'src/PokeApi/Domain/Models/PokemonEntity.model';

export interface PokeApiGateway {
  findByName(name: string): Promise<PokemonEntity>;
}

export const PokeApiGateway = Symbol('PokeApiGateway');

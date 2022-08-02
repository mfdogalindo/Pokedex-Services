import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ProcessErrorException } from 'src/Common/Exceptions/GenericExceptions';
import { PokemonEntity } from 'src/PokeApi/Domain/Models/PokemonEntity.model';
import { PokeApiGateway } from './PokeApiGateway';

@Injectable()
export class PokeApiGatewayImpl implements PokeApiGateway {
  pokeApiURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private readonly httpService: HttpService) {}

  async findByName(name: string): Promise<PokemonEntity> {
    try {
      const { data } = await this.httpService.axiosRef.get(
        `${this.pokeApiURL}/${name}`,
      );
      return data;
    } catch {
      throw new ProcessErrorException('PokeApi not responding');
    }
  }

  async findPages(offset: number, limit: number): Promise<any> {
    try {
      const { data } = await this.httpService.axiosRef.get(
        `${this.pokeApiURL}?offset=${offset}&limit=${limit}`,
      );
      return data;
    } catch {
      throw new ProcessErrorException('PokeApi not responding');
    }
  }
}

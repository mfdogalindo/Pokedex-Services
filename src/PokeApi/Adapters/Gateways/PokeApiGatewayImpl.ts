import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ProcessErrorException } from 'src/Common/Exceptions/GenericExceptions';
import { PokemonEntity } from 'src/PokeApi/Domain/Models/PokemonEntity.model';
import { PokeApiGateway } from './PokeApiGateway';

@Injectable()
export class PokeApiGatewayImpl implements PokeApiGateway {
  constructor(private readonly httpService: HttpService) {}

  async findByName(name: string): Promise<PokemonEntity> {
    try {
      const { data } = await this.httpService.axiosRef.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      );
      return data;
    } catch {
      throw new ProcessErrorException('PokeApi not responding');
    }
  }
}

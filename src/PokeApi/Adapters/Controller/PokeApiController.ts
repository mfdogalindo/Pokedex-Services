import { Controller, Get, Param, Res } from '@nestjs/common';
import { PokeApiExceptions } from 'src/PokeApi/Domain/Exceptions/PokeApiExceptions';
import { PokeApiService } from '../../Domain/Service/PokeApiService';

@Controller({
  path: '/api/pokemon',
  version: ['2'],
})
export class PokeApiController {
  constructor(private readonly pokeApiService: PokeApiService) {}

  // @Get('')
  // async findAll(@Param('id') id: string): Promise<any> {
  //   return false;
  // }

  @Get('/:name')
  async findByName(@Param('name') name: string, @Res() response): Promise<any> {
    try {
      const pokemon = await this.pokeApiService.findByName(name);
      if (!pokemon) {
        throw 'Not found';
      }
      return response.status(200).json(pokemon);
    } catch {
      PokeApiExceptions.PokemonNotFound();
    }
  }
}

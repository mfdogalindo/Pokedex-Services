import { Controller, Get, Param } from '@nestjs/common';
import { PokeApiService } from '../../Domain/Service/PokeApiService';

@Controller({
  path: '/api/pokemon',
  version: ['2'],
})
export class PokeApiController {
  constructor(private readonly pokeApiService: PokeApiService) {}

  @Get('')
  async findAll(@Param('id') id: string): Promise<any> {
    return false;
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<any> {
    return false;
  }
}

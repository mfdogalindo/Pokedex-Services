import {
  Controller,
  Get,
  Param,
  Query,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpExceptionFilter } from 'src/Common/Exceptions/HttpExceptionFilter';
import { PokeApiService } from '../../Domain/Service/PokeApiService';

@Controller({
  path: '/api/pokemon',
  version: ['2'],
})
@UseFilters(HttpExceptionFilter)
export class PokeApiController {
  constructor(private readonly pokeApiService: PokeApiService) {}

  @Get()
  async findPages(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Res() response,
  ): Promise<any> {
    const page = await this.pokeApiService.findPages(offset, limit);
    return response.status(200).json(page);
  }

  @Get('/:name')
  @UseGuards(AuthGuard('jwt'))
  async findByName(@Param('name') name: string, @Res() response): Promise<any> {
    const pokemon = await this.pokeApiService.findByName(name);
    return response.status(200).json(pokemon);
  }
}

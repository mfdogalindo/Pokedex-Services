import { HttpException, HttpStatus } from '@nestjs/common';

export class PokemonNotFoundException extends HttpException {
  constructor() {
    super('Pokemon not found', HttpStatus.NOT_FOUND);
  }
}

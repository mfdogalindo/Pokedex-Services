import { HttpException, HttpStatus } from '@nestjs/common';

export class PokemonNotFoundException extends HttpException {
  constructor() {
    super('Pokemon not found', HttpStatus.NOT_FOUND);
  }
}

export class UnauthorizedException extends HttpException {
  constructor() {
    super('Unauthorized user', HttpStatus.UNAUTHORIZED);
  }
}

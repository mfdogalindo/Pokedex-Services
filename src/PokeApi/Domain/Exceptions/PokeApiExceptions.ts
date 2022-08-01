import { HttpException, HttpStatus } from '@nestjs/common';

export class PokeApiExceptions {
  static ProcessError(): string {
    throw new HttpException(
      'Transaction failure',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static PokemonNotFound(): string {
    throw new HttpException('Pokemon not found', HttpStatus.NOT_FOUND);
  }
}

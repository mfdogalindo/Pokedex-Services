import { HttpException, HttpStatus } from '@nestjs/common';

export class ProcessErrorException extends HttpException {
  constructor(message: string) {
    super(
      message ? message : 'Transaction failure',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}

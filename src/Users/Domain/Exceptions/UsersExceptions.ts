import { HttpException, HttpStatus } from '@nestjs/common';

export class UsersExceptions {
  static ProcessError(): string {
    throw new HttpException(
      'Transaction failure',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static UserNotFound(): string {
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  static InvalidCredentials() {
    throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
  }

  static InvalidPassword(errors: string[]) {
    throw new HttpException(
      `Password is not valid: ${errors.join(', ')}`,
      HttpStatus.BAD_REQUEST,
    );
  }

  static UserEmailAlreadyUsed() {
    throw new HttpException('Email is already used', HttpStatus.BAD_REQUEST);
  }
}

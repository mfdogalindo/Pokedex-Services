import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND);
  }
}
export class InvalidCredentialsException extends HttpException {
  constructor() {
    super('Invalid credentials', HttpStatus.FORBIDDEN);
  }
}
export class UserEmailAlreadyUsedException extends HttpException {
  constructor() {
    super('Email is already used', HttpStatus.BAD_REQUEST);
  }
}
export class InvalidPasswordException extends HttpException {
  constructor(errors: string[]) {
    super(
      `Password is not valid: ${errors.join(', ')}`,
      HttpStatus.BAD_REQUEST,
    );
  }
}

import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserCommand } from '../Commands/CreateUser';
import { ValidateCredentialsCommand } from '../Commands/ValidateCredentials';
import { UsersExceptions } from '../Exceptions/UsersExceptions';
import { User } from '../Models/User';
import { UsersService } from '../Service/UsersService';

@Controller({
  path: '/users',
  version: ['1'],
})
export class UsersControllers {
  private readonly logger = new Logger('UsersControllers');

  constructor(private readonly usersService: UsersService) {}

  @Get('/:id')
  findById(@Param('id') id: string): User | void {
    this.usersService
      .findById(id)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        UsersExceptions.UserNotFound(err);
      });
  }

  @Put()
  login(@Body() cmd: ValidateCredentialsCommand): User {
    const validation = this.usersService.validateCredentials(
      cmd.email,
      cmd.password,
    );
    if (validation) {
      return validation;
    } else {
      UsersExceptions.InvalidCredentials();
    }
  }

  @Post()
  create(@Body() cmd: CreateUserCommand): Promise<User> {
    return this.usersService.create(cmd.name, cmd.email, cmd.password);
  }
}

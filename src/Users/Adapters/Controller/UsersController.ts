import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Res,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/Common/Exceptions/HttpExceptionFilter';
import { CreateUserCommand } from '../../Ports/Commands/CreateUserCommand';
import { ValidateCredentialsCommand } from '../../Ports/Commands/ValidateCredentialsCommand';
import { UsersExceptions } from '../../Domain/Exceptions/UsersExceptions';
import { User } from '../../Domain/Models/User.model';
import { UsersService } from '../../Domain/Services/UsersService';

@Controller({
  path: '',
  version: ['1'],
})
@UseFilters(HttpExceptionFilter)
export class UsersController {
  private readonly logger = new Logger('UsersControllers');

  constructor(private readonly usersService: UsersService) {}

  @Get('/users/:id')
  async findById(@Param('id') id: string, @Res() response): Promise<User> {
    try {
      const user = await this.usersService.findById(id);
      if (!user) {
        throw 'Not found';
      }
      return response.status(200).json(user);
    } catch {
      UsersExceptions.UserNotFound();
    }
  }

  @Put('/login')
  async login(@Body() cmd: ValidateCredentialsCommand): Promise<boolean> {
    try {
      const validation = await this.usersService.validateCredentials(
        cmd.email,
        cmd.password,
      );
      return cmd.email == validation?.email;
    } catch {
      UsersExceptions.InvalidCredentials();
    }
  }

  @Post('/users')
  async create(@Body() cmd: CreateUserCommand): Promise<User> {
    try {
      return await this.usersService.create(cmd.name, cmd.email, cmd.password);
    } catch {
      UsersExceptions.ProcessError();
    }
  }
}

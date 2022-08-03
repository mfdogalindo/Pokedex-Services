import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Request,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/Common/Exceptions/HttpExceptionFilter';
import { CreateUserCommand } from '../../Ports/Commands/CreateUserCommand';
import { ValidateCredentialsCommand } from '../../Ports/Commands/ValidateCredentialsCommand';
import { User } from '../../Domain/Models/User.model';
import { UsersService } from '../../Domain/Services/UsersService';
import {
  InvalidCredentialsException,
  UserNotFoundException,
} from 'src/Users/Domain/Exceptions/UsersExceptions';
import { AuthService } from 'src/Users/Domain/Services/AuthService';
import { AuthGuard } from '@nestjs/passport';

@Controller({
  path: '',
  version: ['1'],
})
@UseFilters(HttpExceptionFilter)
export class UsersController {
  private readonly logger = new Logger('UsersControllers');

  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Get('/users/:id')
  async findById(@Param('id') id: string, @Res() response): Promise<User> {
    try {
      const user = await this.usersService.findById(id);
      if (!user) {
        throw 'Not found';
      }
      return response.status(200).json(user);
    } catch {
      throw new UserNotFoundException();
    }
  }

  @Post('/login')
  async login(@Body() cmd: ValidateCredentialsCommand): Promise<any> {
    const user = await this.usersService.validateCredentials(
      cmd.email,
      cmd.password,
    );
    if (cmd.email == user?.email) {
      return this.authService.createToken(user);
    } else {
      throw new InvalidCredentialsException();
    }
  }

  @Post('/validate')
  @UseGuards(AuthGuard('jwt'))
  async validate(@Request() req: any): Promise<any> {
    return req.user;
  }

  @Post('/users')
  async create(@Body() cmd: CreateUserCommand): Promise<User> {
    return await this.usersService.create(cmd.name, cmd.email, cmd.password);
  }
}
